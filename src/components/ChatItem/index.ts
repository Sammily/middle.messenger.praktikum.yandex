import { Block } from '../../core/Block';
import template from './chatItem.hbs';
import store, { StoreEvents } from '../../core/Store';
import { Chat} from 'pages/ChatActive';

type ChatItemType = {
    events?: {
      click: (evt: PointerEvent) => void;
    };
}

export class ChatItem extends Block {
  constructor(props: Chat & ChatItemType ) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
        });
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}
