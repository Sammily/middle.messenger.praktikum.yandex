import { MessageType } from 'pages/Chat';
import { Block } from '../../core/Block';
import template from './message.hbs';
import { MyID } from 'components/MessagePanel';

export class Message extends Block {
  constructor(props: MessageType & MyID) {
    super(props);
    }
    
    init() {
        if (this.props.myId === this.props.user_id) {
            this.props.isMyMsg = true;
        }
    }
    
  render() {
    return this.compile(template, { ...this.props});
  }
}