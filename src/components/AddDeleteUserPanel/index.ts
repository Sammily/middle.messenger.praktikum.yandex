import { Block } from '../../core/Block';
import template from './addDeleteUserPanel.hbs';
import { Image } from '../Image';
import buttonImg from "../../assets/addUserbutton.png";
import ProfileController from '../../controllers/ProfileController';
import { Button } from '../../components/Button';

export class AddDeleteUserPanel extends Block {
    constructor(props: object | undefined) {
        super(props)
    }
    
    userName: FormDataEntryValue | null = null;

    init() {
        this.children.close = new Button({
            buttonClass: 'close-btn', type: 'button', buttonText: 'X',
            events: {
                click: (evt) => {
                    evt.preventDefault();
                    const modal = document.querySelector('#addDeleteUser') as HTMLElement;
                    modal.style.visibility = 'hidden';
                }
            }
        });

        this.children.addUserBtn = new Button({
            buttonClass: 'add-user-btn', type: 'button', buttonText: 'Добавить пользователя',
            events: {
                click: async () => {
                    const form = document.getElementById('addDeleteUserForm') as HTMLFormElement;
                    const formData = new FormData(form);
                    this.userName = formData.get('UserName');
                    const userObj = await ProfileController.searchUser(this.userName as string);
                    console.log(userObj);
                    console.log('add user from chat');
                    //ChatsController.addUserFromChat(testUser);
                }
            }
        });

        this.children.deleteUserBtn = new Button({
            buttonClass: 'delete-user-btn', type: 'button', buttonText: 'Удалить пользователя',
            events: {
                click: async () => {
                    console.log(this.props);
                    const form = document.getElementById('addDeleteUserForm') as HTMLFormElement;
                    //console.log(form);
                    const formData = new FormData(form);
                    this.userName = formData.get('UserName');
                    console.log(this.userName);
                    const userObj = await ProfileController.searchUser(this.userName as string);
                    console.log(userObj);
                    console.log('delete user from chat');
                    //ChatsController.deleteUserFromChat(testUser);
                }
            }
        });
        this.children.deleteChatBtn = new Button({
            buttonClass: 'delete-btn', type: 'button', buttonText: 'Удалить чат',
            events: {
                click: (evt) => {
                    evt.preventDefault();
                    console.log('delete chat');
                    const modal = document.querySelector('#addDeleteUser') as HTMLElement;
                    modal.style.visibility = 'hidden';
                }
            }
        });
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
