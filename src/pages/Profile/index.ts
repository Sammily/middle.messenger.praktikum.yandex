import { Block } from "../../core/Block";
import template from "./profile.hbs";
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";

export class Profile extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
        super("div", props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Зарегистрироваться' });
        this.children.input = new Input({ forAndName: 'email', labelClass: 'profile__label', labelText: 'Почта', inputType: 'email', InputClass: 'profile__input disabled', value: 'pochta@yandex.ru' });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'profile__label', labelText: 'Логин', inputType: 'text', InputClass: 'profile__input', value: 'IvanIvanov' });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'profile__label', labelText: 'Имя', inputType: 'text', InputClass: 'profile__input', value: 'Иван' });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'profile__label', labelText: 'Фамилия', inputType: 'text', InputClass: 'profile__input', value: 'Иванов' });
        this.children.input5 = new Input({ forAndName: 'display_name', labelClass: 'profile__label', labelText: 'Имя в чате', inputType: 'text', InputClass: 'profile__input', value: 'Иван' });
        this.children.input6 = new Input({ forAndName: 'phone', labelClass: 'profile__label', labelText: 'Логин', inputType: 'phone', InputClass: 'profile__input', value: '+79001234567'});
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
    }

    render() {
        return this.compile(template, {});
      }
}