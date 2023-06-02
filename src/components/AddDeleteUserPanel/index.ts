import { Block } from '../../core/Block';
import template from './addDeleteUserPanel.hbs';
import { Image } from '../Image';
import buttonImg from "../../assets/addUserbutton.png";

export class AddDeleteUserPanel extends Block {
  constructor(props: object | undefined) {
    super(props)
  }

    init() {
        this.children.image = new Image({ src: buttonImg, alt: "add icon"});
        this.children.image2 = new Image({ src: buttonImg, alt: "delete icon", class: "delete-icon"});
    }
    render() {
    return this.compile(template, { ...this.props});
  }
}
