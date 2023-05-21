import { Block } from '../../core/Block';
import template from './input.hbs';

type InputProps = {
    forAndName: string;
    labelClass: string;
    labelText: string;
    inputType: string;
    InputClass: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super("div", props)
  }

    render() {
        console.log(this.props);
    return this.compile(template, { ...this.props});
  }
}
