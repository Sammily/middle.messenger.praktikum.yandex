import { Block } from '../../core/Block';
import template from './messagePanel.hbs';
import { Image } from '../Image';
import userImg from "../../assets/usersImg.png";
import dotsMenu from "../../assets/dotsButton.png";
import clipButton from "../../assets/clipButton.png";
import arrowButton from "../../assets/arrowButton.png";
import ChatsController from '../../controllers/ChatsController';
import store, { StoreEvents } from '../../core/Store';
import { ChatProps, MessageType } from '../../pages/Chat';
import { Message } from '../../components/Message';
import isEqual from '../../utils/isEqual';

export type MyID = {
    myId: number;
}

class MessagePanel extends Block { 
    constructor(props: ChatProps) {
        super(props);

        store.on(StoreEvents.Updated, () => {
                this.setProps(store.getState());
        });
    }
    
    init() {
        store.set('currentChat', 0);
        this.children.image = new Image({ src: userImg, alt: "user photo", class: "chat-panel__user-photo" });
        this.children.dotsMenu = new Image({
            src: dotsMenu, alt: "dots menu", class: "chat-panel__dots-menu",
            events: {
                click: () => {
                    const modal = document.querySelector('#addDeleteUser') as HTMLElement;
                    modal.style.visibility = 'visible';
                } 
            }
        });
        this.children.clipButton = new Image({ src: clipButton, alt: "clip button", class: "chat-panel__clip-button" });
        this.children.arrowButton = new Image({
            src: arrowButton, alt: "arrow button", class: "chat-panel__arrow-button",
            events: {
                click: (evt: PointerEvent) => {
                    evt.preventDefault();
                    const value = (document.getElementById('message') as HTMLInputElement).value;
                    if(value === '') {
                        (document.getElementById('error') as HTMLLabelElement).textContent = 'Введите сообщение';
                    } else {
                        (document.getElementById('error') as HTMLLabelElement).textContent = '';
                    }
                    const form = document.getElementById('form') as HTMLFormElement;
                    const formData = new FormData(form);
                    const message = formData.get('message');
                    const chatID = this.props.currentChat;
                    console.log(chatID, message);
                    ChatsController.sendMessage(chatID, message as string);
                    (document.getElementById('message') as HTMLInputElement).value = '';
                }
            }
        });
    }

    componentDidUpdate(oldProps: ChatProps, newProps: ChatProps): boolean {
        if (isEqual(newProps, oldProps)) {
            return false;
        } else {
            const chatIdChanged = newProps.currentChat !== oldProps.currentChat;
            const chatSelected = Boolean(newProps.currentChat);
            if (chatIdChanged && chatSelected) {
                const currentMessages = newProps.messages![newProps.currentChat!];
                this.setProps({ message: currentMessages });
                const chatInfo = newProps.chats!.filter(item => item.id === newProps.currentChat)[0];
                this.setProps({ chatName: chatInfo.title });
                this.updateMessages();
            }
            return true;
        }
    }

    updateMessages() {
        if (this.props.message?.length > 0) {
            this.children.msgList = this.props.message.map((msg: MessageType) => {
                return new Message({ ...msg, myId: this.props.user.id });
            })
        } else {
            this.children.msgList = new Message(this.props);
        }
    }
   
    render() {
        return this.compile(template, { ...this.props});
    }
}

export default MessagePanel;