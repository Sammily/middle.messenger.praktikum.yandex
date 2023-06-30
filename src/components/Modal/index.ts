import { Button } from '../Button';
import { Block } from '../../core/Block';
import template from './modal.hbs';
import ProfileController from "../../controllers/ProfileController";
import ChatsController from '../../controllers/ChatsController';
import store from '../../core/Store';
import chat from 'api/chat';

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
                    const form = document.querySelector('.changeAvatarForm') as HTMLFormElement;
                    const formData = new FormData(form);
                    this.avatar = formData.get('avatar');
                    formData.set('chatId', store.getState().currentChat);
                    if (this.props.type = 'chatAvatar') {
                        ChatsController.changeChatAvatar(formData);
                    } else {
                        ProfileController.changeAvatar(new FormData(form));
                    }
                    
                }
            }
        });
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
