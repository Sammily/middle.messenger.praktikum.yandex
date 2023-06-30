import { Block } from '../../core/Block';
import template from './chatItem.hbs';
import { ChatType } from 'pages/Chat';
import { Image } from "../../components/Image";

type ChatItemType = {
    events?: {
      click: (evt: PointerEvent) => void;
    };
}

export class ChatItem extends Block {
    constructor(props: ChatType & ChatItemType ) {
        super(props);
        
    }

    init() {
        if (!this.props.last_message) {
            return;
        }
        const todayDate = new Date().toLocaleDateString();
        const messageDate = new Date(this.props.last_message.time).toLocaleDateString();
        if (todayDate === messageDate) {
            this.props.time = new Date(this.props.last_message.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        } else {
            this.props.time = messageDate;
        }

        this.props.previewMsg = this.props.last_message.content.slice(0, 30) + '...';
        
        if (this.props.avatar) {
            this.children.avatar = new Image({
                src: ('https://ya-praktikum.tech/api/v2/resources' + this.props.avatar),
                alt: "Chat avatar",
                class: "sidebar-user-chat__user-photo"
            });
        }
       
    }

    render() {
    return this.compile(template, { ...this.props });
  }
}
