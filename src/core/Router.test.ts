import sinon from "sinon";
import Router from "./Router";
import { expect } from "chai";
import { Block } from "./Block";

describe('Router', () => {
    let BlockMock: Block;
    let getContentFake = sinon.stub();

    beforeEach(() => {
        getContentFake.returns(document.createElement('div'));
        BlockMock = class {
            getContent = getContentFake
        } as unknown as Block
    })

    afterEach(() => {
        sinon.restore();
    })

    it('Use должен вернуть инстанс роутера', () => {
        const params = {
            block: BlockMock,
            pathname: '/',
        }
        //@ts-ignore
        const result = Router.use(params.pathname, params.block);

        expect(result).to.eq(Router);
    });

    it('Должен отрисовать страницу после запуска роутера', () => {
        const params = {
            block: BlockMock,
            pathname: '/',
        }
         //@ts-ignore
        Router.use(params.pathname, params.block).start();

        expect(getContentFake.callCount).to.eql(1);
    });
})
