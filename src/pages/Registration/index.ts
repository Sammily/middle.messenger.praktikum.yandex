import { Block } from "../../core/Block";
import template from "./registration.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';

export class Registration extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
      super("div", props);
    }
   
    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Зарегистрироваться' });
        this.children.input = new Input({ forAndName: 'email', labelClass: 'label', labelText: 'Почта', inputType: 'email', InputClass: 'input' });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', InputClass: 'input' });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'label', labelText: 'Имя', inputType: 'text', InputClass: 'input' });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'label', labelText: 'Фамилия', inputType: 'text', InputClass: 'input' });    
        this.children.input5 = new Input({ forAndName: 'phone', labelClass: 'label', labelText: 'Логин', inputType: 'phone', InputClass: 'input'});
        this.children.input6 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', InputClass: 'input' });
        this.children.input7 = new Input({ forAndName: 'password-second', labelClass: 'label', labelText: 'Пароль ещё раз', inputType: 'password', InputClass: 'input'});
    }

    render() {
        return this.compile(template, {});
      }
}
  
