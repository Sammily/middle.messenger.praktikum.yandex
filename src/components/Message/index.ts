import { Block } from '../../core/Block';
import template from './message.hbs';

export type MessageProps = {
  content: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props});
  }
}