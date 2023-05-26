import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { validateForms } from "../../utils/validation";

export class LoginPage extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Войти' });
        this.children.input = new Input({ forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', InputClass: 'input'});
        this.children.input2 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', InputClass: 'input' });
        validateForms();
    }

    render() {
        return this.compile(template, this.props);
      }
}
