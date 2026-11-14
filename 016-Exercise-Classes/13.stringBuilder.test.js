const { expect } = require('chai');
const StringBuilder = require('./13.stringBuilder');

describe('13. String Builder', () => {
    it('is a class with the expected methods', () => {
        expect(StringBuilder).to.be.a('function');
        for (const method of ['append', 'prepend', 'insertAt', 'remove', 'toString']) {
            expect(StringBuilder.prototype).to.have.property(method).that.is.a('function');
        }
    });

    it('can be created empty or from a string', () => {
        expect(new StringBuilder().toString()).to.equal('');
        const sb = new StringBuilder('hello');
        expect(sb._stringArray).to.deep.equal(['h', 'e', 'l', 'l', 'o']);
        expect(sb.toString()).to.equal('hello');
    });

    it('appends, prepends, inserts and removes', () => {
        const sb = new StringBuilder('hello');
        sb.append(', there');
        sb.prepend('User, ');
        sb.insertAt('woop', 5);
        expect(sb.toString()).to.equal('User,woop hello, there');
        sb.remove(6, 3);
        expect(sb.toString()).to.equal('User,w hello, there');
    });

    it('throws a TypeError for non-string arguments', () => {
        const sb = new StringBuilder();
        expect(() => new StringBuilder(5)).to.throw(TypeError, 'Argument must be a string');
        expect(() => sb.append(5)).to.throw(TypeError, 'Argument must be a string');
        expect(() => sb.prepend({})).to.throw(TypeError, 'Argument must be a string');
        expect(() => sb.insertAt(null, 0)).to.throw(TypeError, 'Argument must be a string');
    });
});
