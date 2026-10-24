const { expect } = require('chai');
const sum = require('./04.sumOfNumbers');

describe('04. Sum of Numbers', () => {
    it('sums an array of numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('returns 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });
    it('handles negatives and decimals', () => {
        expect(sum([-1, 2.5, 0.5])).to.equal(2);
    });
    it('parses numeric strings', () => {
        expect(sum(['1', '2'])).to.equal(3);
    });
    it('returns NaN for non-numeric values', () => {
        expect(sum(['a', 1])).to.be.NaN;
    });
});
