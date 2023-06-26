import { MessageType } from 'pages/Chat';
import { Block } from '../../core/Block';
import template from './message.hbs';

export class Message extends Block {
  constructor(props: MessageType) {
    super(props);
  }

    init(): void {
        console.log(this.props);
    }
    
  render() {
    return this.compile(template, { ...this.props});
  }
}