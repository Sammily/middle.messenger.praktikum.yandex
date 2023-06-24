import { Block } from '../../core/Block';
import template from './chatActive.hbs';
import { Sidebar } from '../../components/Sidebar';
import MessagePanel from '../../components/MessagePanel';
import store, { StoreEvents } from '../../core/Store';
import ChatsController from '../../controllers/ChatsController';
import { withRouter } from '../../hocs/withRouter';
import Router from 'core/Router';
import { UserType } from 'api/profile';

export type LastMessage = {
    user: UserType;
    time: string;
    content: string;
    id: number
}

export type Chat = {
    avatar: null | string;
    created_by: number;
    id: number;
    last_message: LastMessage | null;
    title: string;
    unread_count: number
}

export type ChatProps = {
    router?: typeof Router;
    _id?: string;
    user?: UserType;
    chats?: Chat[];
    currentChat?: number;
}

class ChatActive extends Block {
    constructor(props: ChatProps) {
        super(props);

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }
    
    init() {
        ChatsController.getChats();
        this.children.sidebar = new Sidebar({});
        
        this.children.message = new MessagePanel({});
    }

    render() {
        return this.compile(template, { ...this.props});
    }
}

export default withRouter(ChatActive);
