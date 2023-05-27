import { Block } from "../../core/Block";
import template from "./authorization.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { validation } from "../../utils/validation";

export class LoginPage extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Войти', events: 
            { click: (evt: PointerEvent) => {
                evt.preventDefault();
                validation(this.children.input, 'login');
                validation(this.children.input, 'password');
                const form = document.getElementById('form') as HTMLFormElement;
                const formData = new FormData(form);
                const login = formData.get('login');
                const password = formData.get('password');
                console.log(login, password);
            } 
            }
        });
        this.children.input = new Input({
            forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', inputClass: 'input', events:
                {
                focus: (evt: PointerEvent) => {
                    validation(this.children.input, 'login')
                },
                blur: (evt: PointerEvent) => {
                    validation(this.children.input, 'login')
                }
        }});
        this.children.input2 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', inputClass: 'input', events:
            {
            focus: (evt: PointerEvent) => {
                validation(this.children.input2, 'password')
            },
            blur: (evt: PointerEvent) => {
                validation(this.children.input2, 'password')
            }
        }});
    }

    render() {
        return this.compile(template, this.props);
      }
}
