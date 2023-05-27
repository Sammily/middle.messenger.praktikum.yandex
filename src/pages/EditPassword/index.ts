import { Block } from "../../core/Block";
import template from "./editPassword.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { Button } from "../../components/Button";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";

export class EditPassword extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Сохранить' });
        this.children.input = new Input({ forAndName: 'oldPassword', labelClass: 'profile__label', labelText: 'Старый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••' });
        this.children.input1 = new Input({ forAndName: 'newPassword', labelClass: 'profile__label', labelText: 'Новый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••••' });
        this.children.input2 = new Input({ forAndName: 'newPasswordAgain', labelClass: 'profile__label', labelText: 'Повторите новый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••••' });
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });
    }

    render() {
        return this.compile(template, this.props);
      }
}
