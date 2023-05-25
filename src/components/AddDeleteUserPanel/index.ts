import { Block } from '../../core/Block';
import template from './addDeleteUserPanel.hbs';

export class AddDeleteUserPanel extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
