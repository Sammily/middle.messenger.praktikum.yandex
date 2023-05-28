import { Block } from "../../core/Block";
import template from "./editPassword.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { Button } from "../../components/Button";
import profilePhoto from "../../assets/ProfileImg.png"
import { Image } from "../../components/Image";
import { validationPassword } from "../../utils/validation";

export class EditPassword extends Block {

    constructor(props: object | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Сохранить', events: 
        { click: (evt: PointerEvent) => {
            evt.preventDefault();
            validationPassword(this.children.input);
            validationPassword(this.children.input1);
            validationPassword(this.children.input2);
            const form = document.getElementById('form') as HTMLFormElement;
            const formData = new FormData(form);
            const oldPassword = formData.get('oldPassword');
            const newPassword = formData.get('newPassword');
            const newPasswordAgain = formData.get('newPasswordAgain');
            console.log('formData: ', oldPassword, newPassword, newPasswordAgain);
        } 
        }  });
        this.children.input = new Input({ forAndName: 'oldPassword', labelClass: 'profile__label', labelText: 'Старый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••', events:
        {
        focus: () => {
            validationPassword(this.children.input);
        },
        blur: () => {
            validationPassword(this.children.input);
        }
}  });
        this.children.input1 = new Input({ forAndName: 'newPassword', labelClass: 'profile__label', labelText: 'Новый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••••', events:
        {
        focus: () => {
            validationPassword(this.children.input1);
        },
        blur: () => {
            validationPassword(this.children.input1);
        }
}  });
        this.children.input2 = new Input({ forAndName: 'newPasswordAgain', labelClass: 'profile__label', labelText: 'Повторите новый пароль', inputType: 'password', inputClass: 'profile__input', value: '•••••••••••', events:
        {
        focus: () => {
            validationPassword(this.children.input2);
        },
        blur: () => {
            validationPassword(this.children.input2);
        }
}  });
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        this.children.image = new Image({ src: profilePhoto, alt: "Default profile photo", class: "image" });
    }

    render() {
        return this.compile(template, this.props);
      }
}
