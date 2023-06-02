import { Block } from '../../core/Block';
import template from './chatActive.hbs';
import { Sidebar } from '../../components/Sidebar';
import { MessagePanel } from '../../components/MessagePanel';

export class ChatActive extends Block {
  constructor(props: object | undefined) {
    super(props)
    }
    
    init() {
        this.children.sidebar = new Sidebar({});
        this.children.message = new MessagePanel({});
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
