import { Block } from '../../core/Block';
import template from './chatSidebar.hbs';
import { Image } from '../Image';
import userImg from "../../assets/usersImg.png";

export class ChatSidebar extends Block {
  constructor(props: {} | undefined) {
    super(props)
    }
    
    init() {
    this.children.image = new Image({ src: userImg, alt: "user photo", class: "sidebar-user-chat__user-photo"});
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
