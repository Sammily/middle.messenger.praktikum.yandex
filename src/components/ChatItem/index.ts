import { Block } from '../../core/Block';
import template from './chatItem.hbs';
import store, { StoreEvents } from '../../core/Store';

export class ChatItem extends Block {
  constructor(props: object | undefined) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
        });
    }

    init() {
        const chats = store.getState().chats;
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
