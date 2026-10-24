const { expect } = require('chai');
const { captureLog } = require('../test/console');

const sortArray = require('./01.sortArray');
const argumentInfo = require('./02.argumentInfo');
const getFibonator = require('./03.fibonacci');
const breakfastRobot = require('./04.breakfastRobot');
const add = require('./05.functionalSum');

describe('Advanced Functions - Exercise', () => {
    it('01. Sort Array', () => {
        expect(sortArray([14, 7, 17, 6, 8], 'asc')).to.deep.equal([6, 7, 8, 14, 17]);
        expect(sortArray([14, 7, 17, 6, 8], 'desc')).to.deep.equal([17, 14, 8, 7, 6]);
    });

    it('02. Argument Info', () => {
        expect(captureLog(() => argumentInfo('cat', 42, () => 'hello world', 'dog'))).to.deep.equal([
            'string: cat',
            'number: 42',
            "function: () => 'hello world'",
            'string: dog',
            'string = 2',
            'number = 1',
            'function = 1',
        ]);
    });

    it('03. Fibonacci', () => {
        const fib = getFibonator();
        expect([fib(), fib(), fib(), fib(), fib(), fib(), fib()]).to.deep.equal([1, 1, 2, 3, 5, 8, 13]);
    });

    it('04. Breakfast Robot', () => {
        const manager = breakfastRobot();
        expect(manager('restock flavour 50')).to.equal('Success');
        expect(manager('prepare lemonade 4')).to.equal('Error: not enough carbohydrate in stock');
        expect(manager('restock carbohydrate 10')).to.equal('Success');
        expect(manager('prepare apple 1')).to.equal('Success');
        expect(manager('report')).to.equal('protein=0 carbohydrate=9 fat=0 flavour=48');
    });

    it('05. Functional Sum', () => {
        expect(add(1).toString()).to.equal(1);
        expect(add(1)(6)(-3).toString()).to.equal(4);
    });
});
