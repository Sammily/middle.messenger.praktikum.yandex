import { Block } from "../../core/Block";
import template from "./profile.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";
import AuthController from "../../controllers/AuthController";
import { Link } from '../../components/Link';

export class Profile extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.input = new Input({ forAndName: 'email', labelClass: 'profile__label', labelText: 'Почта', inputType: 'email', inputClass: 'profile__input-disabled', value: 'pochta@yandex.ru' });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'profile__label', labelText: 'Логин', inputType: 'text', inputClass: 'profile__input-disabled', value: 'IvanIvanov' });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'profile__label', labelText: 'Имя', inputType: 'text', inputClass: 'profile__input-disabled', value: 'Иван' });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'profile__label', labelText: 'Фамилия', inputType: 'text', inputClass: 'profile__input-disabled', value: 'Иванов' });
        this.children.input5 = new Input({ forAndName: 'display_name', labelClass: 'profile__label', labelText: 'Имя в чате', inputType: 'text', inputClass: 'profile__input-disabled', value: 'Иван' });
        this.children.input6 = new Input({ forAndName: 'phone', labelClass: 'profile__label', labelText: 'Логин', inputType: 'phone', inputClass: 'profile__input-disabled', value: '+79001234567'});
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });


        this.children.logout = new Link({ linkClass: 'red-link', linkText: 'Выйти', events: 
        { click: () => {
            this.clickLogoutBtn();
        } 
        }
    });
    }

    clickLogoutBtn() {
        AuthController.logout();
    }

    render() {
        return this.compile(template, {...this.props});
      }
}
