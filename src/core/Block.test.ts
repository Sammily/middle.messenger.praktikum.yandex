import { expect } from 'chai';
import sinon from 'sinon';
import { Block } from './Block';

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake()
}

describe('Block', () => {
    class ComponentMock extends Block{};

    it('Должен диспатчить init событие после инициализации', () => {
        //@ts-ignore
        new ComponentMock({});
        expect(eventBusMock.emit.calledWith(ComponentMock.EVENTS.INIT)).to.be.false;
    });
})
