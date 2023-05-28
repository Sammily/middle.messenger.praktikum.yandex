import { Block } from "../../core/Block";
import template from "./registration.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { validationEmail, validationLogin, validationName, validationPassword, validationPhone } from "../../utils/validation";

export class Registration extends Block {

    constructor(props: object | undefined) {
      super(props);
    }
   
    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Зарегистрироваться', events: 
        { click: (evt: PointerEvent) => {
            evt.preventDefault();
            validationLogin(this.children.input2);
            validationPassword(this.children.input6);
            validationPassword(this.children.input7);
            validationEmail(this.children.input);
            validationPhone(this.children.input5);
            validationName(this.children.input3);
            validationName(this.children.input4);
            const form = document.getElementById('form') as HTMLFormElement;
            const formData = new FormData(form);
            const login = formData.get('login');
            const password = formData.get('password');
            const passwordSecond = formData.get('password-second');
            const email = formData.get('email');
            const firstName = formData.get('first_name');
            const secondName = formData.get('second_name');
            const phone = formData.get('phone');
            console.log('formData: ', login, password, passwordSecond, email, firstName, secondName, phone);
        } 
        } });
        this.children.input = new Input({ forAndName: 'email', labelClass: 'label', labelText: 'Почта', inputType: 'email', inputClass: 'input', events:
        {
        focus: () => {
            validationEmail(this.children.input);
        },
        blur: () => {
            validationEmail(this.children.input);
        }
} });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'label', labelText: 'Логин', inputType: 'text', inputClass: 'input', events:
        {
        focus: () => {
            validationLogin(this.children.input2);
        },
        blur: () => {
            validationLogin(this.children.input2);
        }
} });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'label', labelText: 'Имя', inputType: 'text', inputClass: 'input', events:
        {
        focus: () => {
            validationName(this.children.input3);
        },
        blur: () => {
            validationName(this.children.input3);
        }
} });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'label', labelText: 'Фамилия', inputType: 'text', inputClass: 'input', events:
        {
        focus: () => {
            validationName(this.children.input4);
        },
        blur: () => {
            validationName(this.children.input4);
        }
} });    
        this.children.input5 = new Input({ forAndName: 'phone', labelClass: 'label', labelText: 'Логин', inputType: 'phone', inputClass: 'input', events:
        {
        focus: () => {
            validationPhone(this.children.input5);
        },
        blur: () => {
            validationPhone(this.children.input5);
        }
}});
        this.children.input6 = new Input({ forAndName: 'password', labelClass: 'label', labelText: 'Пароль', inputType: 'password', inputClass: 'input', events:
        {
        focus: () => {
            validationPassword(this.children.input6);
        },
        blur: () => {
            validationPassword(this.children.input6);
        }
} });
        this.children.input7 = new Input({ forAndName: 'password-second', labelClass: 'label', labelText: 'Пароль ещё раз', inputType: 'password', inputClass: 'input', events:
        {
        focus: () => {
            validationPassword(this.children.input7);
        },
        blur: () => {
            validationPassword(this.children.input7);
        }
}});
    }

    render() {
        return this.compile(template, {...this.props});
      }
}
  
