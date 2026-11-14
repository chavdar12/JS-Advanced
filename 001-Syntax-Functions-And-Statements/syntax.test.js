const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const echo = require('./01.echoFunction');
const stringLength = require('./02.stringLength');
const largestNumber = require('./03.largestNumber');
const circleArea = require('./04.circleArea');
const mathOperations = require('./05.mathOperations');
const sumOfNumbers = require('./06.sumOfNumbers');
const dayOfWeek = require('./07.dayOfWeek');
const daysInAMonth = require('./08.daysInAMonth');
const squareOfStars = require('./09.squareOfStars');
const aggregateElements = require('./10.aggregateElements');

describe('Syntax, Functions and Statements - Lab', () => {
    it('01. Echo Function', () => {
        expect(captureLog(() => echo('Hello, JavaScript!'))).to.deep.equal(['18', 'Hello, JavaScript!']);
    });

    it('02. String Length', () => {
        expect(captureLog(() => stringLength('chocolate', 'ice cream', 'cake'))).to.deep.equal(['22', '7']);
    });

    it('03. Largest Number', () => {
        expect(captureLog(() => largestNumber(-3, -5, -22.5))).to.deep.equal(['The largest number is -3.']);
    });

    it('04. Circle Area', () => {
        expect(captureLog(() => circleArea(5))).to.deep.equal(['78.54']);
        expect(captureLog(() => circleArea('name')))
            .to.deep.equal(['We can not calculate the circle area, because we receive a string.']);
    });

    it('05. Math Operations', () => {
        expect(captureLog(() => mathOperations(5, 6, '+'))).to.deep.equal(['11']);
        expect(captureLog(() => mathOperations(3, 5.5, '*'))).to.deep.equal(['16.5']);
        expect(captureLog(() => mathOperations(2, 10, '**'))).to.deep.equal(['1024']);
    });

    it('06. Sum of Numbers N...M', () => {
        expect(captureLog(() => sumOfNumbers('1', '5'))).to.deep.equal(['15']);
        expect(captureLog(() => sumOfNumbers('-8', '20'))).to.deep.equal(['174']);
    });

    it('07. Day of Week', () => {
        expect(captureLog(() => dayOfWeek('Monday'))).to.deep.equal(['1']);
        expect(captureLog(() => dayOfWeek('Sunday'))).to.deep.equal(['7']);
        expect(captureLog(() => dayOfWeek('Invalid'))).to.deep.equal(['error']);
    });

    it('08. Days in a Month', () => {
        expect(captureLog(() => daysInAMonth(1, 2012))).to.deep.equal(['31']);
        expect(captureLog(() => daysInAMonth(2, 2021))).to.deep.equal(['28']);
        expect(captureLog(() => daysInAMonth(2, 2020))).to.deep.equal(['29']);
    });

    it('09. Square of Stars', () => {
        expect(captureLog(() => squareOfStars(2))).to.deep.equal(['* *', '* *']);
        expect(captureLog(() => squareOfStars())).to.have.length(5);
    });

    it('10. Aggregate Elements', () => {
        expect(captureLog(() => aggregateElements([1, 2, 3]))).to.deep.equal(['6', '1.8333333333333333', '123']);
    });
});
