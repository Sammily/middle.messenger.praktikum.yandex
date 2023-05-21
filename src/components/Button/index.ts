import { Block } from "../../core/Block";

class Button extends Block {

    constructor(props: {} | undefined) {
      super("button", props);
    }
  
    render() {
          // В проекте должен быть ваш собственный шаблонизатор
      return `<div>${this.props.text}</div>`;
    }
  }
  
  function render(query: string, block: Button) {
    const root = document.querySelector(query);
    root!.appendChild(block.getContent());
    return root;
  }
  
  const button = new Button({
          text: 'Click me',
  });

  render(".app", button);
  
setTimeout(() => {
    button.setProps({
      text: 'Click me, please',
    });
  }, 1000);