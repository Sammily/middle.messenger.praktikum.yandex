import { Block } from '../../core/Block';
import template from './chat.hbs';
import { Sidebar } from '../../components/Sidebar';

export class Chat extends Block {
  constructor(props: object | undefined) {
    super(props)
    }
    
    init() {
        this.children.sidebar = new Sidebar({});
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
