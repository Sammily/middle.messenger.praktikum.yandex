import { Link } from '../../components/Link';
import { ChatModal } from '../../components/AddChatModal';
import { ChatSidebar } from '../../components/ChatSidebar';
import { Block } from '../../core/Block';
import template from './sidebar.hbs';
import store, { StoreEvents } from '../../core/Store';
import Router from '../../core/Router';


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
            linkClass: 'addChat', linkText: 'Создать чат', linkSrc: "",
            events: {
                click: () => {
                    const modal = document.querySelector('.modal') as HTMLElement;
                    modal.style.visibility = 'visible';
                } 
            }
        });
        this.children.profileLink = new Link({
          linkClass: 'chat__link', linkText: 'Профиль >', linkSrc: "/settings",
          events: {
              click: () => {
                  Router.go('/settings');
              } 
          }
      });
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
