import { Block } from '../../core/Block';
import template from './messagePanel.hbs';

export class MessagePanel extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }
    
    render() {
    return this.compile(template, { ...this.props});
  }
}
