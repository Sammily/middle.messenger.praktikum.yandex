import { ChatSidebar } from '../../components/ChatSidebar';
import { Block } from '../../core/Block';
import template from './sidebar.hbs';

export class Sidebar extends Block {
  constructor(props: object | undefined) {
    super(props)
    }
    
    init() {
        this.children.chatSidebar = new ChatSidebar({});
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
