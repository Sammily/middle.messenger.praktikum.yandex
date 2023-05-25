import { Block } from "../../core/Block";
import template from "./editPassword.hbs";
import { Input } from '../../components/Input';
import { SideButton } from "../../components/sideButton";
import { validateForms } from "../../utils/validation";
import { Button } from "../../components/Button";

export class EditPassword extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
        super(props);  
    }

    init() {
        this.children.button = new Button({ buttonClass: 'btn', type: 'submit', buttonText: 'Сохранить' });
        this.children.input = new Input({ forAndName: 'oldPassword', labelClass: 'label', labelText: 'Старый пароль', inputType: 'password', InputClass: 'input', value: '•••••••••' });
        this.children.input1 = new Input({ forAndName: 'newPassword', labelClass: 'label', labelText: 'Новый пароль', inputType: 'password', InputClass: 'input', value: '•••••••••••' });
        this.children.input2 = new Input({ forAndName: 'newPasswordAgain', labelClass: 'label', labelText: 'Повторите новый пароль', inputType: 'password', InputClass: 'input', value: '•••••••••••' });
        this.children.sideButton = new SideButton({ buttonClass: 'side-btn' });
        validateForms();
    }

    render() {
        console.log(this.props);

        return this.compile(template, this.props);
      }
}
