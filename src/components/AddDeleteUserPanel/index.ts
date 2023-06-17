import { Block } from '../../core/Block';
import template from './addDeleteUserPanel.hbs';
import { Image } from '../Image';
import buttonImg from "../../assets/addUserbutton.png";
import ChatsController from '../../controllers/ChatsController';

export class AddDeleteUserPanel extends Block {
  constructor(props: object | undefined) {
    super(props)
  }

    init() {

      const testUser = {
        users: [1046574],
        chatId: 13063

      };
        this.children.image = new Image({ src: buttonImg, alt: "add icon", events: {
          'click': () => {
            ChatsController.addUserFromChat(testUser);
          }
        }});
        this.children.image2 = new Image({ src: buttonImg, alt: "delete icon", class: "delete-icon", events: {
          'click': () => {
            ChatsController.deleteUserFromChat(testUser);
          }
        }});
    }
    render() {
    return this.compile(template, { ...this.props});
  }
}
