const { expect } = require('chai');
const { captureLog } = require('../test/console');

const areaAndVolume = require('./01.areaAndVolumeCalculator');
const add = require('./02.add');
const { createFormatter, currencyFormatter } = require('./03.currencyFormat');
const filterEmployees = require('./04.filterEmployees');
const commandProcessor = require('./05.commandProcessor');
const listProcessor = require('./06.listProcessor');
const cars = require('./07.cars');

describe('Advanced Functions - Lab', () => {
    it('01. Area and Volume Calculator', () => {
        function area() { return Math.abs(this.x * this.y); }
        function vol() { return Math.abs(this.x * this.y * this.z); }
        expect(areaAndVolume(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"-2","y":"3","z":"5"}]'))
            .to.deep.equal([{ area: 2, volume: 20 }, { area: 6, volume: 30 }]);
    });

    it('02. Add', () => {
        const add5 = add(5);
        expect(add5(2)).to.equal(7);
        expect(add5(3)).to.equal(8);
        expect(add(7)(-1)).to.equal(6);
    });

    it('03. Currency Format', () => {
        const dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
        expect(dollarFormatter(5345)).to.equal('$ 5345,00');
        expect(dollarFormatter(2.709)).to.equal('$ 2,71');
        expect(createFormatter('.', 'BGN', false, currencyFormatter)(12.5)).to.equal('12.50 BGN');
    });

    it('04. Filter Employees', () => {
        const data = JSON.stringify([
            { id: '1', first_name: 'Ardine', last_name: 'Bassam', email: 'abassam0@cnn.com', gender: 'Female' },
            { id: '2', first_name: 'Kizzee', last_name: 'Jost', email: 'kjost1@forbes.com', gender: 'Female' },
            { id: '3', first_name: 'Evanne', last_name: 'Maldin', email: 'emaldin2@hostgator.com', gender: 'Male' },
        ]);
        expect(captureLog(() => filterEmployees(data, 'gender-Female'))).to.deep.equal([
            '0. Ardine Bassam - abassam0@cnn.com',
            '1. Kizzee Jost - kjost1@forbes.com',
        ]);
        expect(captureLog(() => filterEmployees(data, 'all'))).to.have.length(3);
    });

    it('05. Command Processor', () => {
        const processor = commandProcessor();
        processor.append('hello');
        processor.append('again');
        processor.removeStart(3);
        processor.removeEnd(4);
        expect(captureLog(() => processor.print())).to.deep.equal(['loa']);
        processor.removeEnd(0);
        expect(captureLog(() => processor.print())).to.deep.equal(['loa']);
    });

    it('06. List Processor', () => {
        expect(captureLog(() => listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])))
            .to.deep.equal(['again,again']);
        expect(captureLog(() => listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])))
            .to.deep.equal(['pesho,george']);
    });

    it('07. Cars (inheritance)', () => {
        expect(captureLog(() => cars([
            'create c1',
            'create c2 inherit c1',
            'set c1 color red',
            'set c2 model new',
            'print c1',
            'print c2',
        ]))).to.deep.equal(['color:red', 'model:new,color:red']);
    });
});
