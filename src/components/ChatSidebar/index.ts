import { Block } from '../../core/Block';
import template from './chatSidebar.hbs';
import store, { StoreEvents } from '../../core/Store';

type chat = {
  avatar: string | null;
  created_by: number;
  id : number;
  last_message : LastMessageType | null;
  title : string;
  unread_count : number
}

type LastMessageType = {
    content: string | null;
    id : number;
    time: string | null;
}

type AllChatsProps = {
  chats: chat[];
}

export class ChatSidebar extends Block {
  constructor(props: AllChatsProps) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
    }

    init() {
      console.log(store.getState())
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
