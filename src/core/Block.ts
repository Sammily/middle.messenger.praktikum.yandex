import { EventBus } from "./eventBus";
import { v4 as makeUUID } from 'uuid';

export class Block {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_RENDER: "flow:render",
      FLOW_CDU: "flow:component-did-update",
    };
  
    _element: null | HTMLElement = null;
    _meta: { props: object };
    _id = '';
  
    props:  {[index: string]: object | string};
    eventBus: () => EventBus;
    children: { [x: string]: Block };

    isRendering = false;
    renderQueue:any = [];

    constructor(propsAndChildren = {}) {
        const { children, props } = this._getChildren(propsAndChildren);
        
        const eventBus = new EventBus();
        
        this._meta = {
        props
        };

        this.children = children;
        this._id = makeUUID();
        this.props = this._makePropsProxy({ ...props, _id: this._id });
        
        this.eventBus = () => eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    
    _getChildren(propsAndChildren: object) {
        const children: {[x: string]: Block} = {};
        const props: {[x: string]: any} = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });
        return { children, props };
  }
  
    _addEvents() {
        const { events = {} } = this.props as {
            events: Record<string, () => void>;
        };
        Object.keys(events).forEach((eventName) => {
            if (eventName === 'blur' || eventName === 'focus' || eventName === 'change') {
                this._element?.children[1].addEventListener(eventName, events[eventName]);
                
            } else {
                this._element?.addEventListener(eventName, events[eventName]);
            }
        });
    }
    
  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }
  
  _createResources() {
      const tagName = 'div';
      this._element = this._createDocumentElement(tagName);
  }
  
  _init() {
      this._createResources();
      this.init();
      //this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      // or ???
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    
    init() {}
  
    _componentDidMount() {
        //this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        this.componentDidMount();
    }

    componentDidMount() {
  }
  
  dispatchComponentDidMount() {
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      
      Object.values(this.children).forEach((child) =>
      child.dispatchComponentDidMount()
    );
  }
  
  _componentDidUpdate(oldProps: object, newProps: object) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(response) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }
  
  componentDidUpdate(oldProps: object, newProps: object) {
    return true;
  }
  
  setProps = (nextProps: any ) => {
    if (!nextProps) {
      return;
    }
  
    Object.assign(this.props, nextProps);
  };
  
  get element() {
    return this._element;
  }

  renderr() {
    console.log('do renderrr');
    this.isRendering = true;
    const block = this.render();
    const newElement = block.firstElementChild as HTMLElement;
    console.log('this.props.value: ',this.props.value,'replace-start');
    this._element!.replaceWith(newElement);
    console.log('this.props.value: ',this.props.value,'replace-end');
    this._element = newElement;
    this._addEvents();
    this.isRendering = false;
  }
  
  _render() {
    //console.log(this);
      console.log('FLAG', this.isRendering);
      if(!this.isRendering) {
        if(this.renderQueue.length !== 0) {
          console.log('do queue');
          for(let i = 0; i < this.renderQueue.length; i+=1) {
            console.log('do render');
            this.renderQueue[i].call(this);
          }
          this.renderQueue = [];
          console.log('empty?', this.renderQueue);
        } else {
          console.log('main render');
          this.renderr();
        }
      } else {
        this.renderQueue.push(this.renderr);
        console.log('push queue',this.renderQueue);
      }
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }
  
  getContent() {
    return this.element!;
  }
  
  _makePropsProxy(props: {[index: string ]: object | string}) {
    const self = this;
    const proxy = new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
            return typeof value === "function" ? value.bind(target) : value;
      },
        set(target, prop: string, value) {
        const oldTarget = { ...target };
        target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
  });
    return proxy;
    }
    
    compile(template: (props: any) => string, props: any) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                propsAndStubs[key] = child.map(
                  (child) => `<div data-id="${child._id}"></div>`
                );
              } else {
                propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
              }
            });

        const html = template(propsAndStubs);
        const temp = document.createElement('template');
        temp.innerHTML = html;

        const replaceStubToComponent = (component: Block) => {
            const stub = temp.content.querySelector(`[data-id="${component._id}"]`);
      
            if (!stub) {
              return;
            }
            component.getContent()?.append(...Array.from(stub.childNodes));
            stub.replaceWith(component.getContent()!);
          };
      
          Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
              component.forEach((component) => replaceStubToComponent(component));
            } else {
              replaceStubToComponent(component);
            }
          });
      
          return temp.content    
    }
  
    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
  }
  
    show() {
        this.getContent().style.display = "block";
    }
  
    hide() {
      this.getContent().style.display = "none";
    }
  }
