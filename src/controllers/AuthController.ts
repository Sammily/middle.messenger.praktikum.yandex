import store from '../core/Store';
import API, { AuthAPI, SignInDataType, SignUpDataType } from '../api/auth';
import Router from '../core/Router';
import ChatsController from './ChatsController';


export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }
   
  async signin(data: SignInDataType) {
      try {
        await this.api.signin(data);
          const user = await this.api.read();
          console.log(user);
        store.set('user', user );
        //console.log(window.store);
        Router.go('/settings');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignUpDataType) {
    try {
      await this.api.signup(data);

      Router.go('/messenger');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async logout() {
    console.log('logout');
    try {
      ChatsController.closeAll();
        await this.api.logout();
        store.set('user', null);
        Router.go('/');
    } catch (e: any) {
      //console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }
}

export default new AuthController();
