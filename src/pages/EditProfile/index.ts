import { Block } from "../../core/Block";
import template from "./editProfile.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { Button } from "../../components/Button";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";
import { validationEmail, validationLogin, validationName, validationPhone } from "../../utils/validation";

export class EditProfile extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Сохранить', events: 
        { click: (evt: PointerEvent) => {
            evt.preventDefault();
            validationEmail(this.children.input);
            validationLogin(this.children.input2);
            validationName(this.children.input3);
            validationName(this.children.input4);
            validationName(this.children.input5);
            validationPhone(this.children.input6);          
            const form = document.getElementById('form') as HTMLFormElement;
            const formData = new FormData(form);
            const login = formData.get('login');
            const email = formData.get('email');
            const firstName = formData.get('first_name');
            const secondName = formData.get('second_name');
            const displayName = formData.get('display_name');
            const phone = formData.get('phone');
            console.log('formData: ', login, displayName, email, firstName, secondName, phone);
        } 
        }  });
        this.children.input = new Input({ forAndName: 'email', labelClass: 'profile__label', labelText: 'Почта', inputType: 'email', inputClass: 'profile__input', value: 'pochta@yandex.ru', events:
        {
        focus: (evt: PointerEvent) => {
            validationEmail(this.children.input);
        },
        blur: (evt: PointerEvent) => {
            validationEmail(this.children.input);
        }
}  });
        this.children.input2 = new Input({ forAndName: 'login', labelClass: 'profile__label', labelText: 'Логин', inputType: 'text', inputClass: 'profile__input', value: 'IvanIvanov', events:
        {
        focus: (evt: PointerEvent) => {
            validationLogin(this.children.input2);
        },
        blur: (evt: PointerEvent) => {
            validationLogin(this.children.input2);
        }
}  });
        this.children.input3 = new Input({ forAndName: 'first_name', labelClass: 'profile__label', labelText: 'Имя', inputType: 'text', inputClass: 'profile__input', value: 'Иван', events:
        {
        focus: (evt: PointerEvent) => {
            validationName(this.children.input3);
        },
        blur: (evt: PointerEvent) => {
            validationName(this.children.input3);
        }
}  });
        this.children.input4 = new Input({ forAndName: 'second_name', labelClass: 'profile__label', labelText: 'Фамилия', inputType: 'text', inputClass: 'profile__input', value: 'Иванов', events:
        {
        focus: (evt: PointerEvent) => {
            validationName(this.children.input4);
        },
        blur: (evt: PointerEvent) => {
            validationName(this.children.input4);
        }
}  });
        this.children.input5 = new Input({ forAndName: 'display_name', labelClass: 'profile__label', labelText: 'Имя в чате', inputType: 'text', inputClass: 'profile__input', value: 'Иван', events:
        {
        focus: (evt: PointerEvent) => {
            validationName(this.children.input5);
        },
        blur: (evt: PointerEvent) => {
            validationName(this.children.input5);
        }
}   });
        this.children.input6 = new Input({ forAndName: 'phone', labelClass: 'profile__label', labelText: 'Логин', inputType: 'phone', inputClass: 'profile__input', value: '+79001234567', events:
        {
        focus: (evt: PointerEvent) => {
            validationPhone(this.children.input6);
        },
        blur: (evt: PointerEvent) => {
            validationPhone(this.children.input6);
        }
}});
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });
    }

    render() {
        return this.compile(template, this.props);
      }
}
