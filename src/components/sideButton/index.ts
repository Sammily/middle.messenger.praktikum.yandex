import { Block } from '../../core/Block';
import template from "./sideButton.hbs";
import { Image } from '../Image';
import arrowButton from "../../assets/arrowButton.png";

export class SideButton extends Block {
    [x: string]: any;

  constructor(props: {} | undefined) {
    super(props)
  }

    init() {
        this.children.image = new Image({ src: arrowButton, alt: "arrow button", class: "image"});
    }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}
