import { Block } from '../../core/Block';
import template from './nav.hbs';

type link = {
    link: string;
    label: string;
}

type AllPagesProps = {
    pages: link[];
}

export class AllPages extends Block {
  constructor(props: AllPagesProps) {
    super(props)
  }

    render() {
    return this.compile(template, { ...this.props});
  }
}