import { Block } from '../../core/Block';
import template from './input.hbs';

type InputProps = {
    forAndName: string;
    labelClass: string;
    labelText: string;
    inputType: string;
    inputClass: string;
    value?: string;
    error?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
