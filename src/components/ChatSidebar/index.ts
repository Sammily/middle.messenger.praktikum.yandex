import { Block } from '../../core/Block';
import template from './chatSidebar.hbs';
import { Image } from '../Image';
import userImg from "../../assets/usersImg.png";
import store, { StoreEvents } from '../../core/Store';

type chat = {
  avatar: string | null;
  created_by: number;
  id : number;
  last_message : string | null;
  title : string;
  unread_count : number
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
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
