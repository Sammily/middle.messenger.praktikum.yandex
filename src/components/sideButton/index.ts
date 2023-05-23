import { Block } from '../../core/Block';
import template from './sideButton.hbs';

type ButtonProps = {
    buttonClass: string;
}

export class SideButton extends Block {
  constructor(props: ButtonProps) {
    super("div", props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
