import { Block } from '../../core/Block';
import template from './chatSidebar.hbs';

export class ChatSidebar extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
