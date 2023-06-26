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

class MessagePanel extends Block { 
    constructor(props: ChatProps) {
        super(props);

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }
    
    init() {
        this.children.image = new Image({ src: userImg, alt: "user photo", class: "chat-panel__user-photo" });
        this.children.dotsMenu = new Image({
            src: dotsMenu, alt: "dots menu", class: "chat-panel__dots-menu",
            events: {
                click: () => {
                    //Router.go('/addAndDeleteUser');
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
                //Router.go('/messenger');
                    
                }
            }
        });
    }

    componentDidUpdate(oldProps: ChatProps, newProps: ChatProps): boolean {
        const chatIdChanged = newProps.currentChat !== oldProps.currentChat;
        const chatSelected = Boolean(newProps.currentChat);
        if (chatIdChanged && chatSelected) {
            console.log(newProps);
            const currentMessages = newProps.messages![this.props.currentChat];
            console.log(currentMessages);
            this.setProps({ message: currentMessages });
        }
        return true;
    }

    renderMessages() {
        if (this.props.messages?.length > 0) {
            this.children.messages = this.props.message.map((msg: MessageType) => {
                return new Message({ ...msg });
            })
        }
    }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}

export default MessagePanel;