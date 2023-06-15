import API, { PasswordDataType, ProfileAPI, UserType } from '../api/profile';
import Router from '../core/Router';

export class ProfileController {
  private readonly api: ProfileAPI;

  constructor() {
    this.api = API;
  }

  async changeUser(data: UserType) {
      try {
          await this.api.changeUser(data);
          console.log('changeUser');
      //Router.go('/settings');
    } catch (e: any) {
      console.error(e);
    }
    }
    
    async changePassword(data: PasswordDataType) {
        try {
            await this.api.changePassword(data);
            console.log('changePassword');
        //Router.go('/settings');
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
