const { expect } = require('chai');
const validateRequest = require('./01.requestValidator');

describe('01. Request Validator', () => {
    const valid = { method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' };
    const error = (part) => `Invalid request header: Invalid ${part}`;

    it('returns a valid request unchanged', () => {
        expect(validateRequest(valid)).to.equal(valid);
        expect(validateRequest({ ...valid, uri: '*', message: 'hello world' })).to.deep.include({ uri: '*' });
    });
    it('rejects a bad or missing method', () => {
        expect(() => validateRequest({ ...valid, method: 'OPTIONS' })).to.throw(error('Method'));
        expect(() => validateRequest({ uri: 'a', version: 'HTTP/1.1', message: '' })).to.throw(error('Method'));
    });
    it('rejects a bad or missing URI', () => {
        expect(() => validateRequest({ ...valid, uri: '%appdata%' })).to.throw(error('URI'));
        expect(() => validateRequest({ ...valid, uri: '' })).to.throw(error('URI'));
        expect(() => validateRequest({ method: 'GET', version: 'HTTP/1.1', message: '' })).to.throw(error('URI'));
    });
    it('rejects a bad version', () => {
        expect(() => validateRequest({ ...valid, version: 'HTTP/3.0' })).to.throw(error('Version'));
    });
    it('rejects special characters or a missing message', () => {
        expect(() => validateRequest({ ...valid, message: 'rm -rf /*<' })).to.throw(error('Message'));
        expect(() => validateRequest({ method: 'GET', uri: 'a', version: 'HTTP/1.1' })).to.throw(error('Message'));
    });
});
