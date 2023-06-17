import { Link } from '../../components/Link';
import { ChatModal } from '../../components/AddChatModal';
import { ChatSidebar } from '../../components/ChatSidebar';
import { Block } from '../../core/Block';
import template from './sidebar.hbs';
import store, { StoreEvents } from '../../core/Store';


export class Sidebar extends Block {
  constructor(props: object | undefined) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }
    
    init() {
        const chats = store.getState().chats;
        this.children.chatSidebar = new ChatSidebar({chats});
        this.children.chatModal = new ChatModal({});
        this.children.addChat = new Link({
            linkClass: 'addChat', linkText: '+',
            events: {
                click: () => {
                    const modal = document.querySelector('.modal') as HTMLElement;
                    modal.style.visibility = 'visible';
                } 
            }
        });
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
