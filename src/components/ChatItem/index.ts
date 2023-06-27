import { Block } from '../../core/Block';
import template from './chatItem.hbs';
import store, { StoreEvents } from '../../core/Store';
import { ChatType } from 'pages/Chat';

type ChatItemType = {
    events?: {
      click: (evt: PointerEvent) => void;
    };
}

export class ChatItem extends Block {
    constructor(props: ChatType & ChatItemType ) {
        super(props);

        store.on(StoreEvents.Updated, () => {
        this.setProps(store.getState());
            });
    }

    init() {
        const todayDate = new Date().toLocaleDateString();
        const messageDate = new Date(this.props.last_message.time).toLocaleDateString();
        if (todayDate === messageDate) {
            this.props.time = new Date(this.props.last_message.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        } else {
            this.props.time = messageDate;
        }

        this.props.previewMsg = this.props.last_message.content.slice(0,30)+'...';
    }

    render() {
    return this.compile(template, { ...this.props });
  }
}
