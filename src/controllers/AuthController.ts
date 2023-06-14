import API, { AuthAPI, SignInDataType, SignUpDataType } from '../api/auth';
import { Store } from '../core/Store';
import Router from '../core/Router';

export class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SignInDataType) {
      try {
      await this.api.signin(data);
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
      await this.api.logout();

      Router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }

}

export default new AuthController();
