import { Block } from "../../core/Block";
import template from "./editProfile.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { Button } from "../../components/Button";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";

export class EditProfile extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Сохранить' });
        this.children.input = new Input({ forAndName: 'email', labelClass: 'profile__label', labelText: 'Почта', inputType: 'email', inputClass: 'profile__input', value: 'pochta@yandex.ru' });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'profile__label', labelText: 'Логин', inputType: 'text', inputClass: 'profile__input', value: 'IvanIvanov' });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'profile__label', labelText: 'Имя', inputType: 'text', inputClass: 'profile__input', value: 'Иван' });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'profile__label', labelText: 'Фамилия', inputType: 'text', inputClass: 'profile__input', value: 'Иванов' });
        this.children.input5 = new Input({ forAndName: 'display_name', labelClass: 'profile__label', labelText: 'Имя в чате', inputType: 'text', inputClass: 'profile__input', value: 'Иван' });
        this.children.input6 = new Input({ forAndName: 'phone', labelClass: 'profile__label', labelText: 'Логин', inputType: 'phone', inputClass: 'profile__input', value: '+79001234567'});
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });
    }

    render() {
        return this.compile(template, this.props);
      }
}
