import { Link } from '../../components/Link';
import { ChatModal } from '../../components/AddChatModal';
import { Block } from '../../core/Block';
import template from './sidebar.hbs';
import store, { StoreEvents } from '../../core/Store';
import Router from '../../core/Router';
import { ChatProps } from 'pages/Chat';
import { ChatItem } from '../../components/ChatItem';
import ChatsController from '../../controllers/ChatsController';

const tempChat = {chats: [{
    avatar: null,
    created_by: 1,
    id: 1,
    last_message: null,
    title: 'default',
    unread_count: 0
},
{
    avatar: null,
    created_by: 2,
    id: 2,
    last_message: null,
    title: 'default',
    unread_count: 0
}]
}

class Sidebar extends Block {
  constructor(props: ChatProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }
    
    init() {
        this.props = store.getState();
        console.log(this.props.chats.length);
        if (this.props.chats.length === 0) {
            this.children.chatList = this.createItems(tempChat);
        } else {
            this.children.chatList = this.createItems(this.props);
        }
        
        
        this.children.chatModal = new ChatModal({});
        this.children.addChat = new Link({
            linkClass: 'addChat', linkText: 'Создать чат',
            events: {
                click: () => {
                    const modal = document.querySelector('.modal') as HTMLElement;
                    modal.style.visibility = 'visible';
                } 
            }
        });
        this.children.profileLink = new Link({
          linkClass: 'chat__link', linkText: 'Профиль >',
          events: {
              click: () => {
                  Router.go('/settings');
              } 
          }
        });     
    }

    createItems(props: ChatProps) {
        return props.chats!.map(data => {
            return new ChatItem({
                ...data,
                events: {
                    click: () => {
                        ChatsController.checkedChat(data.id);
                    }
                }
            });
        })
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}

export default Sidebar;