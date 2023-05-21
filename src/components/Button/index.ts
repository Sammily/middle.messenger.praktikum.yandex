import { Block } from '../../core/Block';
import template from './button.hbs';

export class Button extends Block {
  constructor(props: any) {
    super("div", props)
  }

    render() {
        console.log(this.props);
    return this.compile(template, { ...this.props});
  }
}
