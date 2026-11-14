const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const Rectangle = require('./01.rectangle');
const Request = require('./02.dataClass');
const tickets = require('./03.tickets');
const List = require('./04.sortedList');
const Stringer = require('./05.lengthLimit');
const Company = require('./06.company');
const Hex = require('./07.hex');
const juiceFlavors = require('./08.juiceFlavors');
const autoEngineeringCompany = require('./09.autoEngineeringCompany');

describe('Classes - Exercise', () => {
    it('01. Rectangle', () => {
        const rect = new Rectangle(4, 5, 'Red');
        expect([rect.width, rect.height, rect.color, rect.calcArea()]).to.deep.equal([4, 5, 'Red', 20]);
    });

    it('02. Data Class', () => {
        expect({ ...new Request('GET', 'http://google.com', 'HTTP/1.1', '') }).to.deep.equal({
            method: 'GET', uri: 'http://google.com', version: 'HTTP/1.1', message: '', response: undefined, fulfilled: false,
        });
    });

    it('03. Tickets', () => {
        const input = [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ];
        expect(tickets(input, 'destination').map((t) => t.destination))
            .to.deep.equal(['Boston', 'New York City', 'New York City', 'Philadelphia']);
        expect(tickets(input, 'status').map((t) => t.status))
            .to.deep.equal(['available', 'available', 'departed', 'sold']);
        expect(tickets(input, 'price')[0]).to.deep.include({ destination: 'Philadelphia', price: 94.2 });
    });

    it('04. Sorted List', () => {
        const list = new List();
        list.add(5);
        list.add(6);
        list.add(7);
        list.add(1);
        expect(list.get(1)).to.equal(5);
        list.remove(1);
        expect(list.get(1)).to.equal(6);
        expect(list.size).to.equal(3);
        expect(() => list.get(3)).to.throw(RangeError);
        expect(() => list.remove(-1)).to.throw(RangeError);
    });

    it('05. Length Limit', () => {
        const test = new Stringer('Test', 5);
        expect(String(test)).to.equal('Test');
        test.decrease(3);
        expect(String(test)).to.equal('Te...');
        test.decrease(5);
        expect(String(test)).to.equal('...');
        test.increase(4);
        expect(String(test)).to.equal('Test');
    });

    it('06. Company', () => {
        const c = new Company();
        expect(c.addEmployee('Stanimir', 2000, 'engineer', 'Construction'))
            .to.equal('New employee is hired. Name: Stanimir. Position: engineer');
        c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
        c.addEmployee('Slavi', 500, 'dyer', 'Construction');
        c.addEmployee('Stan', 2000, 'architect', 'Construction');
        c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
        c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
        c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
        expect(c.bestDepartment()).to.equal([
            'Best Department is: Construction',
            'Average salary: 1500.00',
            'Stan 2000 architect',
            'Stanimir 2000 engineer',
            'Pesho 1500 electrical engineer',
            'Slavi 500 dyer',
        ].join('\n'));
        expect(() => c.addEmployee('', 1, 'x', 'y')).to.throw('Invalid input!');
        expect(() => c.addEmployee('a', -1, 'x', 'y')).to.throw('Invalid input!');
    });

    it('07. Hex', () => {
        const FF = new Hex(255);
        expect(FF.toString()).to.equal('0xFF');
        expect(FF.valueOf() + 1).to.equal(256);
        const a = new Hex(10);
        const b = new Hex(5);
        expect(a.plus(b).toString()).to.equal('0xF');
        expect(a.minus(b).toString()).to.equal('0x5');
        expect(a.plus(b).toString() === '0xF').to.equal(true);
        expect(Hex.parse('AAA')).to.equal(2730);
    });

    it('08. Juice Flavors', () => {
        expect(captureLog(() => juiceFlavors([
            'Orange => 2000',
            'Peach => 1432',
            'Banana => 450',
            'Peach => 600',
            'Strawberry => 549',
        ]))).to.deep.equal(['Orange => 2', 'Peach => 2']);
        expect(captureLog(() => juiceFlavors([
            'Kiwi => 234',
            'Pear => 2345',
            'Watermelon => 3456',
            'Kiwi => 4567',
            'Pear => 5678',
            'Watermelon => 6789',
        ]))).to.deep.equal(['Pear => 8', 'Watermelon => 10', 'Kiwi => 4']);
    });

    it('09. Auto-Engineering Company', () => {
        expect(captureLog(() => autoEngineeringCompany([
            'Audi | Q7 | 1000',
            'Audi | Q6 | 100',
            'BMW | X5 | 1000',
            'BMW | X6 | 100',
            'Citroen | C4 | 123',
            'Volga | GAZ-24 | 1000000',
            'Lada | Niva | 1000000',
            'Lada | Jigula | 1000000',
            'Citroen | C4 | 22',
            'Citroen | C5 | 10',
        ]))).to.deep.equal([
            'Audi', '###Q7 -> 1000', '###Q6 -> 100',
            'BMW', '###X5 -> 1000', '###X6 -> 100',
            'Citroen', '###C4 -> 145', '###C5 -> 10',
            'Volga', '###GAZ-24 -> 1000000',
            'Lada', '###Niva -> 1000000', '###Jigula -> 1000000',
        ]);
    });
});
