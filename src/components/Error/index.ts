import { Block } from '../../core/Block';
import template from './errorPage.hbs';

export class ErrorPage extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
