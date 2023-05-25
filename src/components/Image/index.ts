import { Block } from '../../core/Block';
import template from './image.hbs';

export class Image extends Block {
  constructor(props: {} | undefined) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}
