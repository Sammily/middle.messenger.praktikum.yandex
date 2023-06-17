import { Button } from '../Button';
import { Block } from '../../core/Block';
import template from './modal.hbs';
import ProfileController from "../../controllers/ProfileController";

export class Modal extends Block {
  constructor(props: object | undefined) {
    super(props)
    }
    
    avatar: FormDataEntryValue | null = null;

    init() {
        this.children.button = new Button({
            buttonClass: 'btn', type: 'submit', buttonText: 'Поменять',
            events: {
                click: (evt) => {
                    evt.preventDefault();
                    const form = document.getElementById('modal') as HTMLFormElement;
                    const formData = new FormData(form);
                    this.avatar = formData.get('avatar');
                    console.log('formData: ', formData);
                    ProfileController.changeAvatar(new FormData(form));
                    //this.onSubmit();
                }
            }
        });
    }

    onSubmit() {
        const data = { avatar: this.avatar };
        console.log(FormData);
        ProfileController.changeAvatar(FormData);
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
