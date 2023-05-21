import Handlebars from "handlebars";
import { Block } from "../../core/Block";

export class LoginPage extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
      super("div", props);
    }
  
    render() {
        const { text, _id } = this.props;
    
        const source = `<button class="btn" type="submit">
        {{text}}
      </button>`;
        const template = Handlebars.compile(source);
    
        console.log(_id);
        console.log(this.props);
    
        return this.compile(template, { text });
      }
}
  

  