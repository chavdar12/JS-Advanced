const { expect } = require('chai');
const lookupChar = require('./03.charLookup');

describe('03. Char Lookup', () => {
    it('returns undefined for invalid parameter types', () => {
        expect(lookupChar(13, 0)).to.equal(undefined);
        expect(lookupChar('abc', '1')).to.equal(undefined);
        expect(lookupChar('abc', 1.5)).to.equal(undefined);
    });
    it('returns "Incorrect index" for out-of-range indexes', () => {
        expect(lookupChar('abc', 3)).to.equal('Incorrect index');
        expect(lookupChar('abc', -1)).to.equal('Incorrect index');
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });
    it('returns the char at a valid index', () => {
        expect(lookupChar('abc', 0)).to.equal('a');
        expect(lookupChar('abc', 2)).to.equal('c');
    });
});
