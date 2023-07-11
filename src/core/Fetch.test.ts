import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { HTTPTransport } from './Fetch';
import { expect } from 'chai';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    const requests: SinonFakeXMLHttpRequest[] = [];
    let instance: HTTPTransport;

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request) => {
            requests.push(request);
        });
        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    });

    it('Должен GET', () => {
        instance.get('/user', { method: 'get', timeout: 5000 });
        const request = requests;
        expect(request[0].method).to.eq('get');
    });
});
