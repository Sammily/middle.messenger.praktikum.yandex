import { Block } from '../../core/Block';
import template from "./sideButton.hbs";
import { Image } from '../Image';

export class SideButton extends Block {
    [x: string]: any;

  constructor(props: {} | undefined) {
    super(props)
  }

    init() {
        this.children.image = new Image({ src: "../../assets/arrowButton.png", alt: "arrow button", class: "image"});
    }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}
