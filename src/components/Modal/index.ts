import { Button } from '../Button';
import { Block } from '../../core/Block';
import template from './modal.hbs';

export class Modal extends Block {
  constructor(props: object | undefined) {
    super(props)
  }
    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Поменять' });
}
    render() {
    return this.compile(template, { ...this.props});
  }
}