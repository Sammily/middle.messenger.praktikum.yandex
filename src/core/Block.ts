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
    _meta: { tagName: string, props: Object };
    _id: string = '';
  
    props:  {[index: string | symbol]: any};
    eventBus: () => EventBus;
    children: { [x: string]: Block };

    constructor(tagName: string = "div", propsAndChildren = {}) {
        const { children, props } = this._getChildren(propsAndChildren);
        
        const eventBus = new EventBus();
        
        this._meta = {
        tagName,
        props
        };

        this.children = children;
        this._id = makeUUID();
        this.props = this._makePropsProxy({ ...props, _id: this._id });
        
        this.eventBus = () => eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
    
    _getChildren(propsAndChildren: Object) {
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
  
  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }
  
  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }
  
  init() {
    this._createResources();
      this.eventBus().emit(Block.EVENTS.FLOW_CDM);
      // or render???
      //this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }
  
    _componentDidMount() {
      //or without render???
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.componentDidMount();
  }

  componentDidMount(oldProps?: undefined) {}
  
  dispatchComponentDidMoun() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }
  
  _componentDidUpdate(oldProps: Object, newProps: Object) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(response) {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }
  
  componentDidUpdate(oldProps: Object, newProps: Object) {
    return true;
  }
  
  setProps = (nextProps: { text: string; }) => {
    if (!nextProps) {
      return;
    }
  
    Object.assign(this.props, nextProps);
  };
  
  get element() {
    return this._element;
  }
  
  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element!.innerHTML = block;
  }

    render(): string {
        return '';
  }
  
  getContent() {
    return this.element as HTMLElement;
  }
  
  _makePropsProxy(props: {[index: string | symbol]: unknown}) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;
    const proxy = new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
            return value;
            //or
            //return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU);
          // self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
  });
    return proxy;
    }
    
    compile(template: any, props: any) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });

        return template(propsAndStubs);        
    }
  
  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }
  
    show() {
        this.getContent().style.display = "block";
    }
  
    hide() {
      this.getContent().style.display = "none";
    }
  }