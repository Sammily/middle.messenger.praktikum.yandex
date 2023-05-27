import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { loginValidation, validateForms } from "../../utils/validation";

export class LoginPage extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Войти', events: 
            { click: (evt: PointerEvent) => {
                evt.preventDefault();
                console.log('submit!!!');
                loginValidation(this.children.input)} 
            }
        });
        this.children.input = new Input({ forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', inputClass: 'input'});
        this.children.input2 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', inputClass: 'input' });
        validateForms();
    }

    render() {
        return this.compile(template, this.props);
      }
}
