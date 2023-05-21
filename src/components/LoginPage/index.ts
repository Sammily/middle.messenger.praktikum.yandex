import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../Button/index";

export class LoginPage extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
      super("div", props);
    }
  
    init() {
        this.children.button = new Button({ text: 'bbbbuttton' });
        
        setTimeout(() => this.children.button.setProps({ text: 'cdcdcdcdcd' }), 1000);
    }

    render() {
        console.log(this.children);
        const { text, _id } = this.props;
    
        console.log(_id);
        console.log(this.props);
    
        return this.compile(template, { text });
      }
}
  
