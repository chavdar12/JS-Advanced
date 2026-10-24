const { expect } = require('chai');

const Person = require('./01.person');
const getPersons = require('./02.getPersons');
const Circle = require('./03.circle');
const Point = require('./04.pointDistance');

describe('Classes - Lab', () => {
    it('01. Person', () => {
        expect(String(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com')))
            .to.equal('Anna Simpson (age: 22, email: anna@yahoo.com)');
    });

    it('02. Get Persons', () => {
        expect(getPersons().map(String)).to.deep.equal([
            'Anna Simpson (age: 22, email: anna@yahoo.com)',
            'SoftUni undefined (age: undefined, email: undefined)',
            'Stephan Johnson (age: 25, email: undefined)',
            'Gabriel Peterson (age: 24, email: g.p@gmail.com)',
        ]);
        expect(getPersons()[0]).to.be.instanceOf(Person);
    });

    it('03. Circle', () => {
        const c = new Circle(2);
        expect(c.diameter).to.equal(4);
        expect(c.area).to.be.closeTo(12.566, 0.001);
        c.diameter = 1.6;
        expect(c.radius).to.equal(0.8);
        expect(c.area).to.be.closeTo(2.0106, 0.0001);
    });

    it('04. Point Distance', () => {
        expect(Point.distance(new Point(5, 5), new Point(9, 8))).to.equal(5);
    });
});
