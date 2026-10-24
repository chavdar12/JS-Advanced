const { expect } = require('chai');
const createCalculator = require('./07.addSubtract');

describe('07. Add / Subtract', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns an object with add, subtract and get', () => {
        expect(calc).to.have.all.keys('add', 'subtract', 'get');
    });
    it('starts at 0', () => {
        expect(calc.get()).to.equal(0);
    });
    it('adds and subtracts numbers', () => {
        calc.add(10);
        calc.subtract(3);
        calc.add(-2.5);
        expect(calc.get()).to.equal(4.5);
    });
    it('parses numeric strings', () => {
        calc.add('7');
        calc.subtract('2');
        expect(calc.get()).to.equal(5);
    });
    it('becomes NaN for non-numeric input', () => {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });
    it('does not expose the internal value', () => {
        expect(calc).to.not.have.property('value');
    });
});
