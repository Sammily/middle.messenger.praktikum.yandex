import { Block } from '../../core/Block';
import template from './button.hbs';

type ButtonProps = {
    buttonClass: string;
    type: string;
    buttonText: string;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super("div", props)
  }

    render() {
        console.log(this.props);
    return this.compile(template, { ...this.props});
  }
}
