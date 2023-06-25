import store from '../core/Store';
import API, { ChangeUserType, PasswordDataType, ProfileAPI } from '../api/profile';

export class ProfileController {
    private readonly api: ProfileAPI;

    constructor() {
        this.api = API;
    }

    async changeUser(data: ChangeUserType) {
        try {
            await this.api.changeUser(data);
            store.set('user', data);
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
        } catch (e: any) {
            console.error(e);
        }
    }

    async changeAvatar(data: any) {
        try {
            await this.api.changeAvatar(data);
        } catch (e: any) {
            console.error(e);
        }
    }

    async searchUser(login: string) {
        try {
            console.log(login);
            await this.api.search(login);
        } catch (e: any) {
            console.error(e);
        }
    }
}

export default new ProfileController();
