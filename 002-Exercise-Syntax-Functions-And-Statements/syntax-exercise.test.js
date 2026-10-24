const { expect } = require('chai');
const { captureLog } = require('../test/console');

const fruit = require('./01.fruit');
const greatestCommonDivisor = require('./02.greatestCommonDivisor');
const sameNumbers = require('./03.sameNumbers');
const previousDay = require('./04.previousDay');
const timeToWalk = require('./05.timeToWalk');
const roadRadar = require('./06.roadRadar');
const cookingByNumbers = require('./07.cookingByNumbers');
const validityChecker = require('./08.validityChecker');
const wordsUppercase = require('./09.wordsUppercase');

describe('Syntax, Functions and Statements - Exercise', () => {
    it('01. Fruit', () => {
        expect(captureLog(() => fruit('orange', 2500, 1.80)))
            .to.deep.equal(['I need $4.50 to buy 2.50 kilograms orange.']);
    });

    it('02. Greatest Common Divisor', () => {
        expect(captureLog(() => greatestCommonDivisor(15, 5))).to.deep.equal(['5']);
        expect(captureLog(() => greatestCommonDivisor(2154, 458))).to.deep.equal(['2']);
    });

    it('03. Same Numbers', () => {
        expect(captureLog(() => sameNumbers(2222222))).to.deep.equal(['true', '14']);
        expect(captureLog(() => sameNumbers(1234))).to.deep.equal(['false', '10']);
    });

    it('04. Previous Day', () => {
        expect(captureLog(() => previousDay(2016, 9, 30))).to.deep.equal(['2016-9-29']);
        expect(captureLog(() => previousDay(2016, 10, 1))).to.deep.equal(['2016-9-30']);
        expect(captureLog(() => previousDay(2021, 1, 1))).to.deep.equal(['2020-12-31']);
    });

    it('05. Time to Walk', () => {
        expect(captureLog(() => timeToWalk(4000, 0.60, 5))).to.deep.equal(['00:32:48']);
        expect(captureLog(() => timeToWalk(2564, 0.70, 5.5))).to.deep.equal(['00:22:35']);
    });

    it('06. Road Radar', () => {
        expect(captureLog(() => roadRadar(40, 'city'))).to.deep.equal(['Driving 40 km/h in a 50 zone']);
        expect(captureLog(() => roadRadar(21, 'residential')))
            .to.deep.equal(['The speed is 1 km/h faster than the allowed speed of 20 - speeding']);
        expect(captureLog(() => roadRadar(120, 'interstate')))
            .to.deep.equal(['The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding']);
        expect(captureLog(() => roadRadar(200, 'motorway')))
            .to.deep.equal(['The speed is 70 km/h faster than the allowed speed of 130 - reckless driving']);
    });

    it('07. Cooking by Numbers', () => {
        expect(captureLog(() => cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')))
            .to.deep.equal(['16', '8', '4', '2', '1']);
        expect(captureLog(() => cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')))
            .to.deep.equal(['3', '4', '2', '6', '4.800000000000001']);
    });

    it('08. Validity Checker', () => {
        expect(captureLog(() => validityChecker(3, 0, 0, 4))).to.deep.equal([
            '{3, 0} to {0, 0} is valid',
            '{0, 4} to {0, 0} is valid',
            '{3, 0} to {0, 4} is valid',
        ]);
        expect(captureLog(() => validityChecker(2, 1, 1, 1))).to.deep.equal([
            '{2, 1} to {0, 0} is invalid',
            '{1, 1} to {0, 0} is invalid',
            '{2, 1} to {1, 1} is valid',
        ]);
    });

    it('09. Words Uppercase', () => {
        expect(captureLog(() => wordsUppercase('Hi, how are you?'))).to.deep.equal(['HI, HOW, ARE, YOU']);
        expect(captureLog(() => wordsUppercase('hello'))).to.deep.equal(['HELLO']);
    });
});
