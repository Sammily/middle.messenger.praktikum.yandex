import store from '../core/Store';
import API, { ChangeUserType, PasswordDataType, ProfileAPI} from '../api/profile';
import Router from '../core/Router';

export class ProfileController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = API;
  }

  async changeUser(data: ChangeUserType) {
      try {
          await this.api.changeUser(data);
          console.log('changeUser');
          store.set('user', data );
      Router.go('/settings');
    } catch (e: any) {
      console.error(e);
    }
    }

    async getUser() {
        const user = await this.api.read(store.getState().user.id);
        console.log(user);
      }
    
    async changePassword(data: PasswordDataType) {
        try {
            await this.api.changePassword(data);
            console.log('changePassword');
        Router.go('/settings');
      } catch (e: any) {
        console.error(e);
      }
    }

    async changeAvatar(data: any) {
        try {
            await this.api.changeAvatar(data);
            console.log('changeAvatar');
        //Router.go('/settings');
      } catch (e: any) {
        console.error(e);
      }
    }
}

export default new ProfileController();
