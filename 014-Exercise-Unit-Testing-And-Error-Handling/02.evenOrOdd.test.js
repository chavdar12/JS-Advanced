const { expect } = require('chai');
const isOddOrEven = require('./02.evenOrOdd');

describe('02. Even or Odd', () => {
    it('returns undefined for non-strings', () => {
        expect(isOddOrEven(13)).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
        expect(isOddOrEven()).to.equal(undefined);
    });
    it('returns even for even-length strings', () => {
        expect(isOddOrEven('ab')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
    });
    it('returns odd for odd-length strings', () => {
        expect(isOddOrEven('abc')).to.equal('odd');
    });
});
