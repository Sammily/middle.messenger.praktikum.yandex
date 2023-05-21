import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';

export class LoginPage extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
      super("div", props);
    }
  
    init() {
        this.children.button = new Button({ text: 'Войти' });
        this.children.input = new Input({ forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', InputClass: 'input'});
        this.children.input2 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'text', InputClass: 'input'});
    }

    render() {
        console.log(this.children);
        const { text, _id } = this.props;
    
        console.log(_id);
        console.log(this.props);
    
        return this.compile(template, { text });
      }
}
  
