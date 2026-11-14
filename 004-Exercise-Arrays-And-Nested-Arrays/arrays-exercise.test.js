const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const printArrayWithDelimiter = require('./01.printArrayWithDelimiter');
const printEveryNthElement = require('./02.printEveryNthElement');
const addAndRemoveElements = require('./03.addAndRemoveElements');
const rotateArray = require('./04.rotateArray');
const extractIncreasingSubsequence = require('./05.extractIncreasingSubsequence');
const listOfNames = require('./06.listOfNames');
const sortingNumbers = require('./07.sortingNumbers');
const sortByTwoCriteria = require('./08.sortByTwoCriteria');
const magicMatrices = require('./09.magicMatrices');
const ticTacToe = require('./10.ticTacToe');
const diagonalAttack = require('./11.diagonalAttack');
const orbit = require('./12.orbit');
const spiralMatrix = require('./13.spiralMatrix');

describe('Arrays and Nested Arrays - Exercise', () => {
    it('01. Print an Array with a Given Delimiter', () => {
        expect(captureLog(() => printArrayWithDelimiter(['One', 'Two', 'Three'], '-'))).to.deep.equal(['One-Two-Three']);
    });

    it('02. Print every N-th Element', () => {
        expect(printEveryNthElement(['5', '20', '31', '4', '20'], 2)).to.deep.equal(['5', '31', '20']);
        expect(printEveryNthElement(['1', '2', '3'], 1)).to.deep.equal(['1', '2', '3']);
    });

    it('03. Add and Remove Elements', () => {
        expect(captureLog(() => addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']))).to.deep.equal(['1\n4\n5']);
        expect(captureLog(() => addAndRemoveElements(['remove', 'remove']))).to.deep.equal(['Empty']);
    });

    it('04. Rotate Array', () => {
        expect(captureLog(() => rotateArray(['1', '2', '3', '4'], 2))).to.deep.equal(['3 4 1 2']);
        expect(captureLog(() => rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)))
            .to.deep.equal(['Orange Coconut Apple Banana']);
        expect(captureLog(() => rotateArray(['a', 'b'], 4))).to.deep.equal(['a b']);
    });

    it('05. Extract Increasing Subsequence', () => {
        expect(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])).to.deep.equal([1, 3, 8, 10, 12, 24]);
        expect(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1])).to.deep.equal([20]);
    });

    it('06. List of Names', () => {
        expect(captureLog(() => listOfNames(['John', 'Bob', 'Christina', 'Ema'])))
            .to.deep.equal(['1.Bob', '2.Christina', '3.Ema', '4.John']);
    });

    it('07. Sorting Numbers', () => {
        expect(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])).to.deep.equal([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]);
        expect(sortingNumbers([3, 1, 2])).to.deep.equal([1, 3, 2]);
    });

    it('08. Sort an Array by 2 Criteria', () => {
        expect(captureLog(() => sortByTwoCriteria(['alpha', 'beta', 'gamma']))).to.deep.equal(['beta', 'alpha', 'gamma']);
        expect(captureLog(() => sortByTwoCriteria(['test', 'Deny', 'omen', 'Default'])))
            .to.deep.equal(['Deny', 'omen', 'test', 'Default']);
    });

    it('09. Magic Matrices', () => {
        expect(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])).to.equal(true);
        expect(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])).to.equal(false);
    });

    it('10. Tic-Tac-Toe', () => {
        expect(captureLog(() => ticTacToe(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0'])))
            .to.deep.equal(['Player O wins!', 'O\tX\tX', 'X\tO\tX', 'O\tfalse\tO']);
        expect(captureLog(() => ticTacToe(['0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1'])))
            .to.deep.equal([
                'This place is already taken. Please choose another!',
                'Player X wins!',
                'X\tX\tX', 'false\tO\tO', 'false\tfalse\tfalse',
            ]);
        expect(captureLog(() => ticTacToe(['0 0', '0 1', '0 2', '1 1', '1 0', '1 2', '2 1', '2 0', '2 2'])))
            .to.deep.equal(['The game ended! Nobody wins :(', 'X\tO\tX', 'X\tO\tO', 'O\tX\tX']);
    });

    it('11. Diagonal Attack', () => {
        expect(captureLog(() => diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])))
            .to.deep.equal(['5 15 15 15 1', '15 4 15 2 15', '15 15 3 15 15', '15 4 15 2 15', '5 15 15 15 1']);
        expect(captureLog(() => diagonalAttack(['1 1 1', '1 1 1', '1 1 0']))).to.deep.equal(['1 1 1', '1 1 1', '1 1 0']);
    });

    it('12. Orbit', () => {
        expect(captureLog(() => orbit([4, 4, 0, 0]))).to.deep.equal(['1 2 3 4', '2 2 3 4', '3 3 3 4', '4 4 4 4']);
        expect(captureLog(() => orbit([3, 3, 2, 2]))).to.deep.equal(['3 3 3', '3 2 2', '3 2 1']);
    });

    it('13. Spiral Matrix', () => {
        expect(captureLog(() => spiralMatrix(3, 3))).to.deep.equal(['1 2 3', '8 9 4', '7 6 5']);
        expect(captureLog(() => spiralMatrix(3, 4))).to.deep.equal(['1 2 3 4', '10 11 12 5', '9 8 7 6']);
    });
});
