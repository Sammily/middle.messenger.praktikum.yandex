import { Link } from './index';
import { expect } from 'chai';

describe('Link', () => {
    it('Должен вернуть <a></a>', () => {
        const link = new Link({ href: '/' , linkClass: 'link', linkText: 'link text'});
        const element = link.element;

        expect(element).to.be.instanceof(window.HTMLAnchorElement)
    });
});