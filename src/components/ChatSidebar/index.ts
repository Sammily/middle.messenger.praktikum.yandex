import { Block } from '../../core/Block';
import template from './chatSidebar.hbs';
import store, { StoreEvents } from '../../core/Store';
import { withRouter } from '../../hocs/withRouter';
import { ChatProps } from 'pages/ChatActive';
import { ChatItem } from '../../components/ChatItem';
import ChatsController from '../../controllers/ChatsController';

const tempChat = {chats: [{
    avatar: null,
    created_by: 1,
    id: 1,
    last_message: null,
    title: 'default',
    unread_count: 0
}]}

class ChatSidebar extends Block {
    constructor(props: ChatProps) {
        super(props);

        store.on(StoreEvents.Updated, () => {
        this.setProps(store.getState());
        });
    }

    init() {
        console.log(this.props);
        if (this.props.chats === undefined) {
            this.children.chatList = this.createItems(tempChat);
        } else {
            this.children.chatList = this.createItems(this.props);
        }
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

export default withRouter(ChatSidebar);
