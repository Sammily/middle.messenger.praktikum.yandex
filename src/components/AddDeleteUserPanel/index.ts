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
      const testUser = {
        users: [1069406],
        chatId: 13063
        };

        this.children.image = new Image({ src: buttonImg, alt: "add icon", events: {
            'click': async () => {
                console.log(this.props);
                const form = document.getElementById('addDeleteUserForm') as HTMLFormElement;
                //console.log(form);
                const formData = new FormData(form);
                this.userName = formData.get('UserName');
                console.log(this.userName as string);
                const userObj = await ProfileController.searchUser(this.userName as string);
                console.log(userObj);
            //ChatsController.addUserFromChat(testUser);
          }
        }});
        this.children.image2 = new Image({ src: buttonImg, alt: "delete icon", class: "delete-icon", events: {
            'click': () => {
                console.log(this.props);
                const form = document.getElementById('addDeleteUserForm') as HTMLFormElement;
                //console.log(form);
                const formData = new FormData(form);
                this.userName = formData.get('UserName');
                console.log(this.userName);
            //ChatsController.deleteUserFromChat(testUser);
          }
        }
        });
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
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
