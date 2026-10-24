const { expect } = require('chai');
const isSymmetric = require('./05.checkForSymmetry');

describe('05. Check for Symmetry', () => {
    it('returns true for symmetric arrays', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(1), { a: 5 }, 'hi', 5])).to.equal(true);
    });
    it('returns true for empty and single-element arrays', () => {
        expect(isSymmetric([])).to.equal(true);
        expect(isSymmetric([1])).to.equal(true);
    });
    it('returns false for non-symmetric arrays', () => {
        expect(isSymmetric([1, 2, 3])).to.equal(false);
        expect(isSymmetric([1, 2, '1'])).to.equal(false);
    });
    it('returns false for non-array input', () => {
        expect(isSymmetric('abba')).to.equal(false);
        expect(isSymmetric(5)).to.equal(false);
        expect(isSymmetric({})).to.equal(false);
    });
});
