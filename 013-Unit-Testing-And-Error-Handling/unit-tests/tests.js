const {expect} = require('chai');
const {sum} = require('./myModule');
const {isSymmetric} = require('./myModule');
const {rgbToHexColor} = require('./myModule');

describe('test sum function', () => {

    it('returns sum of all elements', () => {
        expect(sum([1, 2, 3])).equal(6);
    });
});

describe('test for isSymmetric function', () => {
    it('returns false for wrong input', () => {
        expect(isSymmetric('S')).to.false;
    });

    it('returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 3, 4, 5])).to.be.false;
    });

    // Test Overloading

    it('returns true for symmetric array with odd length', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for non-symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.false;
    });
});

describe('rgbToHexColor function tests', () => {
    it('returns hex for white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('returns hex for black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('returns undefined for invalid range of the first argument', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });

    it('returns undefined for invalid range of the second argument', () => {
        expect(rgbToHexColor(255, -1, 255)).to.be.undefined;
    });
    it('returns undefined for invalid range of the third argument', () => {
        expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
    });

    it('return undefined of invalid type of the first argument', () => {
        expect(rgbToHexColor('s', 255, 255)).to.be.undefined;
    });

    it('return undefined of invalid type of the second argument', () => {
        expect(rgbToHexColor(255, 's', 255)).to.be.undefined;
    });

    it('return undefined of invalid type of the third argument', () => {
        expect(rgbToHexColor(255, 255, 's')).to.be.undefined;
    });
});
