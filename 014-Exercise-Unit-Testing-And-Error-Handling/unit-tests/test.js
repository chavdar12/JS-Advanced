const {expect} = require('chai');
const {isOddOrEven} = require('./evenOrOdd');
const {lookupChar} = require('./lookupChar');
const {mathEnforcer} = require('./mathEnforcer');

describe('evenOrOdd tests', () => {
    it('returns undefined if the passed argument is number', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('return undefined if the passed argument is array', () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    });

    it('returns even for even length of a string', () => {
        expect(isOddOrEven('even')).to.equal('even');
    });

    it('returns odd for a odd length of a string', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    });
});

describe('lookup char tests', () => {
    it('return undefined for non-string value of the first parameter', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
    })

    it('returns undefined for non-integer value for the second parameter', () => {
        expect(lookupChar('Georgi', (5.5))).to.be.undefined;
    })

    it('return undefined if both of the arguments are wrong', () => {
        expect(lookupChar([1, 2], 's')).to.be.undefined;
    });

    it('returns incorrect index for if the index is less than 0', () => {
        expect(lookupChar('Vanko', -1)).to.equal('Incorrect index');
    });

    it('returns incorrent index if the index is bigger than string length', () => {
        expect(lookupChar('Vanko', 6)).to.equal('Incorrect index');
    });

    it('returns char at given index', () => {
        expect(lookupChar('Georgi', 2)).to.equal('o');
    });
});

describe('Math Enforcer tests', () => {
    describe('addDive test', () => {
        it('returns undefined if the argument is not a number', () => {
            expect(mathEnforcer.addFive('s')).to.be.undefined;
        });

        it('returns result of addFive function to positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('returns result of addFive function to negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('returns result of addFive function with floating point number', () => {
            expect(mathEnforcer.addFive(5.5)).closeTo(10.5, 0.1);
        });
    });

    describe('subtractTen tests', () => {
        it('returns undefined if the argument is not a number', () => {
            expect(mathEnforcer.subtractTen('s')).to.be.undefined;
        });

        it('returns proper result of subtractTen function with integer argument', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        })

        it('returns proper result of subtractTen function with floating point argument', () => {
            expect(mathEnforcer.subtractTen(5.5)).closeTo(-4.5, 0.1);
        });
    });

    describe('sum function tests', () => {
        it('returns undefined if the first argument is not a number', () => {
            expect(mathEnforcer.sum('s', 1)).to.be.undefined;
        });

        it('returns undefined if the second argument is not a number', () => {
            expect(mathEnforcer.sum(2, 's')).to.be.undefined;
        });

        it('returns undefined if both arguments are not numbers', () => {
            expect(mathEnforcer.sum('s', 's')).to.be.undefined;
        });

        it('return proper result for sum of two integer values', () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        });

        it('returns proper result for sum of two floating point values', () => {
            expect(mathEnforcer.sum(2.1, 5)).closeTo(7.1, 0.1);
        });
    });
});
