const { expect } = require('chai');
const { captureLog } = require('../test/console');

const evenPositionElement = require('./01.evenPositionElement');
const lastKNumbersSequence = require('./02.lastKNumbersSequence');
const sumFirstLast = require('./03.sumFirstLast');
const negativePositiveNumbers = require('./04.negativePositiveNumbers');
const smallestTwoNumbers = require('./05.smallestTwoNumbers');
const biggerHalf = require('./06.biggerHalf');
const pieceOfPie = require('./07.pieceOfPie');
const processOddPositions = require('./08.processOddPositions');
const biggestElement = require('./09.biggestElement');
const diagonalSums = require('./10.diagonalSums');
const equalNeighbors = require('./11.equalNeighbors');

describe('Arrays and Nested Arrays - Lab', () => {
    it('01. Even Position Element', () => {
        expect(captureLog(() => evenPositionElement(['20', '30', '40', '50', '60']))).to.deep.equal(['20 40 60']);
    });

    it('02. Last K Numbers Sequence', () => {
        expect(lastKNumbersSequence(6, 3)).to.deep.equal([1, 1, 2, 4, 7, 13]);
        expect(lastKNumbersSequence(8, 2)).to.deep.equal([1, 1, 2, 3, 5, 8, 13, 21]);
    });

    it('03. Sum First and Last', () => {
        expect(sumFirstLast(['20', '30', '40'])).to.equal(60);
        expect(sumFirstLast(['5'])).to.equal(10);
    });

    it('04. Negative / Positive Numbers', () => {
        expect(captureLog(() => negativePositiveNumbers([7, -2, 8, 9]))).to.deep.equal(['-2', '7', '8', '9']);
        expect(captureLog(() => negativePositiveNumbers([3, -2, 0, -1]))).to.deep.equal(['-1', '-2', '3', '0']);
    });

    it('05. Smallest Two Numbers', () => {
        expect(captureLog(() => smallestTwoNumbers([30, 15, 50, 5]))).to.deep.equal(['5 15']);
    });

    it('06. Bigger Half', () => {
        expect(biggerHalf([4, 7, 2, 5])).to.deep.equal([5, 7]);
        expect(biggerHalf([3, 19, 14, 7, 2, 19, 6])).to.deep.equal([7, 14, 19, 19]);
    });

    it('07. Piece of Pie', () => {
        const pies = ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'];
        expect(pieceOfPie(pies, 'Key Lime Pie', 'Lemon Meringue Pie'))
            .to.deep.equal(['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']);
    });

    it('08. Process Odd Positions', () => {
        expect(processOddPositions([10, 15, 20, 25])).to.equal('50 30');
        expect(processOddPositions([3, 0, 10, 4, 7, 3])).to.equal('6 8 0');
    });

    it('09. Biggest Element', () => {
        expect(biggestElement([[20, 50, 10], [8, 33, 145]])).to.equal(145);
        expect(biggestElement([[-3, -5], [-7, -1]])).to.equal(-1);
    });

    it('10. Diagonal Sums', () => {
        expect(captureLog(() => diagonalSums([[20, 40], [10, 60]]))).to.deep.equal(['80 50']);
        expect(captureLog(() => diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]))).to.deep.equal(['99 25']);
    });

    it('11. Equal Neighbors', () => {
        expect(equalNeighbors([
            ['2', '3', '4', '7', '0'],
            ['4', '0', '5', '3', '4'],
            ['2', '3', '5', '4', '2'],
            ['9', '8', '7', '5', '4'],
        ])).to.equal(1);
        expect(equalNeighbors([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']]))
            .to.equal(2);
    });
});
