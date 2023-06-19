import { Block } from '../../core/Block';
import template from './chatActive.hbs';
import { Sidebar } from '../../components/Sidebar';
import { MessagePanel } from '../../components/MessagePanel';
import store, { StoreEvents } from '../../core/Store';
import ChatsController from '../../controllers/ChatsController';
import { withRouter } from '../../hocs/withRouter';

class ChatActive extends Block {
  constructor(props: object | undefined) {
    super(props);

    store.on(StoreEvents.Updated, () => {
        this.setProps(store.getState());
      });
    }
    
    init() {
        ChatsController.getChats();
        this.children.sidebar = new Sidebar({});
        this.children.message = new MessagePanel({});
        
    }

    render() {
    return this.compile(template, { ...this.props});
  }
}

export default withRouter(ChatActive);
