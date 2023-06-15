import BaseAPI from './base-api';

export type PasswordDataType =  {
  oldPassword: string;
  newPassword: string;
}

export type UserType =  {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class ProfileAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    changeUser(data: UserType) {
      return this.http.put('/profile', { data: data, method: 'put', timeout: 5000 });
    }
    
    changePassword(data: PasswordDataType) {
        return this.http.put('/password', { data: data, method: 'put', timeout: 5000 });
    }

    changeAvatar(data: any) {
        return this.http.put('/profile/avatar', { data: data, method: 'put', timeout: 5000 });
    }

    read = undefined;
    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new ProfileAPI();
