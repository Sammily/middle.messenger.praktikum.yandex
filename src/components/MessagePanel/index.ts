import { Block } from '../../core/Block';
import template from './messagePanel.hbs';
import { Image } from '../Image';
import userImg from "../../assets/usersImg.png";
import dotsMenu from "../../assets/dotsButton.png";
import clipButton from "../../assets/clipButton.png";
import arrowButton from "../../assets/arrowButton.png";

export class MessagePanel extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }
    
    init() {
        this.children.image = new Image({ src: userImg, alt: "user photo", class: "chat-panel__user-photo" });
        this.children.dotsMenu = new Image({ src: dotsMenu, alt: "dots menu", class: "chat-panel__dots-menu" });
        this.children.clipButton = new Image({ src: clipButton, alt: "clip button", class: "chat-panel__clip-button" });
        this.children.arrowButton = new Image({ src: arrowButton, alt: "arrow button", class: "chat-panel__arrow-button" });
    }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}
