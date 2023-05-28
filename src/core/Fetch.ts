const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Options = {
    data: any;
    method: string;
    headers?: object;
    timeout: number;
};

function queryStringify(data: any) {
    let str = '?';
    for (const key in data) {
        str = str + '' + key + '=' + data[key] + '&';
    }
    return str.slice(0, -1);
}

class HTTPTransport {
    get = (url: string, options: Options = {data: {}, timeout: 5000, method: METHODS.GET}) => {
        options.data = queryStringify(options.data);
        return this.request(url+queryStringify(options.data), {...options}, options.timeout);
    };

    post = (url: string, options: Options = {data: {}, timeout: 5000, method: METHODS.POST}) => {
            return this.request(url, {...options}, options.timeout);
    };

    put = (url: string, options: Options = {data: {}, timeout: 5000, method: METHODS.PUT}) => {
            return this.request(url, {...options}, options.timeout);
    };

    delete = (url: string, options: Options = {data: {}, timeout: 5000, method: METHODS.DELETE}) => { 
            return this.request(url, {...options}, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000) => {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.timeout = timeout;

            xhr.onabort = reject;
            xhr.onerror = reject;
			xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
