import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { validationLogin, validationPassword } from "../../utils/validation";

export class LoginPage extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Войти', events: 
            { click: (evt: PointerEvent) => {
                evt.preventDefault();
                validationLogin(this.children.input);
                validationPassword(this.children.input2);
                const form = document.getElementById('form') as HTMLFormElement;
                const formData = new FormData(form);
                const login = formData.get('login');
                const password = formData.get('password');
                console.log('formData: ', login, password);
            } 
            }
        });
        this.children.input = new Input({
            forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', inputClass: 'input', events:
                {
                focus: () => {
                    validationLogin(this.children.input);
                },
                blur: () => {
                    validationLogin(this.children.input);
                }
        }});
        this.children.input2 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', inputClass: 'input', events:
            {
            focus: () => {
                validationPassword(this.children.input2);
            },
            blur: () => {
                validationPassword(this.children.input2);
            }
        }});
    }

    render() {
        return this.compile(template, this.props);
      }
}
