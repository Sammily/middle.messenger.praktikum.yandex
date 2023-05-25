import { ErrorPage } from "../../components/Error";
import { Block } from "../../core/Block";
import template from "./page400.hbs"

export class Error400 extends Block {
    [x: string]: any;

    constructor(props: {} | undefined) {
        super(props);  
    }

    init() {
        this.children.error = new ErrorPage({number:'400', description: 'Не туда попали'});
    }

    render() {
        return this.compile(template, { ...this.props });
      }
}
