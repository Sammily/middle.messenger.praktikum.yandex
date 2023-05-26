import { Block } from "../../core/Block";
import template from "./profile.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { validateForms } from "../../utils/validation";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";

export class Profile extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.input = new Input({ forAndName: 'email', labelClass: 'profile__label', labelText: 'Почта', inputType: 'email', InputClass: 'profile__input-disabled', value: 'pochta@yandex.ru' });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'profile__label', labelText: 'Логин', inputType: 'text', InputClass: 'profile__input-disabled', value: 'IvanIvanov' });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'profile__label', labelText: 'Имя', inputType: 'text', InputClass: 'profile__input-disabled', value: 'Иван' });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'profile__label', labelText: 'Фамилия', inputType: 'text', InputClass: 'profile__input-disabled', value: 'Иванов' });
        this.children.input5 = new Input({ forAndName: 'display_name', labelClass: 'profile__label', labelText: 'Имя в чате', inputType: 'text', InputClass: 'profile__input-disabled', value: 'Иван' });
        this.children.input6 = new Input({ forAndName: 'phone', labelClass: 'profile__label', labelText: 'Логин', inputType: 'phone', InputClass: 'profile__input-disabled', value: '+79001234567'});
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });
        validateForms();
    }

    render() {
        return this.compile(template, {...this.props});
      }
}
