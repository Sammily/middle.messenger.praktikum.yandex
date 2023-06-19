import BaseAPI from './base-api';

export type CreateChatType = {
    title: string
}

type Users = number[];

export type DeleteOrAddUserFromChat = {
        users: Users,
        chatId: number

}

export class ChatAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    read() {
        return this.http.get('/',{ method: 'get', timeout: 5000 });
    }
    
    create(data: CreateChatType) {
        return this.http.post('/',{ data: data, method: 'post', timeout: 5000 });
    }

    deleteUser(data: DeleteOrAddUserFromChat) {
        return this.http.delete('/users',{ data: data, method: 'delete', timeout: 5000 });
    }

    addUser(data: DeleteOrAddUserFromChat) {
        return this.http.put('/users',{ data: data, method: 'put', timeout: 5000 });
    }

    async getToken(id: number) {
        const result = await this.http.post(`/token/${id}`,{ method: 'post', timeout: 5000 }) as {token: string};
        return result.token;
    }

    update = undefined;
    delete = undefined;
}

export default new ChatAPI();
