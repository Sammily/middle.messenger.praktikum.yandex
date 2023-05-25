import { ErrorPage } from "../../components/Error";
import { Block } from "../../core/Block";
import template from "./page500.hbs"

export class Error500 extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
        super(props);  
    }

    init() {
        this.children.error = new ErrorPage({number:'500', description: 'Мы уже фиксим'});
    }

    render() {
        return this.compile(template, { ...this.props });
      }
}
