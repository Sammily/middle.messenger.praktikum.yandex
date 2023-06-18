import { Block } from '../../core/Block';
import template from './messagePanel.hbs';
import { Image } from '../Image';
import userImg from "../../assets/usersImg.png";
import dotsMenu from "../../assets/dotsButton.png";
import clipButton from "../../assets/clipButton.png";
import arrowButton from "../../assets/arrowButton.png";
import ChatsController from '../../controllers/ChatsController';

export class MessagePanel extends Block {
  constructor(props: object | undefined) {
    super(props)
  }
    
    init() {
        this.children.image = new Image({ src: userImg, alt: "user photo", class: "chat-panel__user-photo" });
        this.children.dotsMenu = new Image({ src: dotsMenu, alt: "dots menu", class: "chat-panel__dots-menu" });
        this.children.clipButton = new Image({ src: clipButton, alt: "clip button", class: "chat-panel__clip-button" });
        this.children.arrowButton = new Image({ src: arrowButton, alt: "arrow button", class: "chat-panel__arrow-button", events: 
        { click: (evt: PointerEvent) => {
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
            console.log('formData: ', message);
            console.log('send message - ',message, 'to chat id = 13063');
            ChatsController.sendMessage(13063, message as string);
        } 
        }   });
    }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}
