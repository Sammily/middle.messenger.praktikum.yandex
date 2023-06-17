import store from '../core/Store';
import API, { ChatAPI, CreateChatType, DeleteOrAddUserFromChat } from '../api/chat';
//import Router from '../core/Router';


export class ChatsController {
  private readonly api: ChatAPI;

  constructor() {
    this.api = API;
  }
   
  async getChats() {
      try {
        const chats = await this.api.read();
        store.set('chats', chats);
        console.log(store)
    } catch (e: any) {
      console.error(e);
    }
  }

  async createChat(data: CreateChatType) {
    try {
      await this.api.create(data);
      this.getChats();
      //Router.go('/messenger');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async addUserFromChat(data: DeleteOrAddUserFromChat) {
    try {
      await this.api.addUser(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async deleteUserFromChat(data: DeleteOrAddUserFromChat) {
    try {
      await this.api.deleteUser(data);
    } catch (e: any) {
      console.error(e.message);
    }
  }

}

export default new ChatsController();
