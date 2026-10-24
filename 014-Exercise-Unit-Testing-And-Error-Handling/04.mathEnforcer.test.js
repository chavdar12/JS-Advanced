const { expect } = require('chai');
const mathEnforcer = require('./04.mathEnforcer');

describe('04. Math Enforcer', () => {
    describe('addFive', () => {
        it('returns undefined for non-numbers', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('adds five to integers, negatives and floats', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('returns undefined for non-numbers', () => {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        });
        it('subtracts ten from integers, negatives and floats', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('sum', () => {
        it('returns undefined if either argument is not a number', () => {
            expect(mathEnforcer.sum('1', 2)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '2')).to.equal(undefined);
        });
        it('sums integers, negatives and floats', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);
            expect(mathEnforcer.sum(-1, -2)).to.equal(-3);
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
        });
    });
});
