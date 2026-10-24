const { expect } = require('chai');
const rgbToHexColor = require('./06.rgbToHex');

describe('06. RGB to Hex', () => {
    it('converts valid colors with uppercase, zero-padded hex', () => {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });
    it('handles the bounds', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('returns undefined for out-of-range values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0, 300)).to.equal(undefined);
    });
    it('returns undefined for non-integers', () => {
        expect(rgbToHexColor('5', 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(1.5, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, 0)).to.equal(undefined);
    });
});
