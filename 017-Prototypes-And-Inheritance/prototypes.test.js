const { expect } = require('chai');

const Person = require('./01.person');
const personAndTeacher = require('./02.personAndTeacher');
const toStringExtension = require('./03.inheritingAndReplacingToString');
const extendPrototype = require('./04.extendPrototype');
const classHierarchy = require('./05.classHierarchy');

describe('Prototypes and Inheritance - Lab', () => {
    it('01. Person (fullName accessor)', () => {
        const person = new Person('Peter', 'Ivanov');
        expect(person.fullName).to.equal('Peter Ivanov');
        person.firstName = 'George';
        expect(person.fullName).to.equal('George Ivanov');
        person.fullName = 'Nikola Tesla';
        expect([person.firstName, person.lastName]).to.deep.equal(['Nikola', 'Tesla']);
        person.fullName = 'Invalid';
        expect(person.fullName).to.equal('Nikola Tesla');
    });

    it('02. Person and Teacher', () => {
        const { Person: P, Teacher } = personAndTeacher();
        const t = new Teacher('Ivan', 'ivan@mail.bg', 'JS');
        expect(t).to.be.instanceOf(P);
        expect({ ...t }).to.deep.equal({ name: 'Ivan', email: 'ivan@mail.bg', subject: 'JS' });
    });

    it('03. Inheriting and Replacing toString', () => {
        const { Person: P, Teacher, Student } = toStringExtension();
        expect(String(new P('Ivan', 'ivan@mail.bg'))).to.equal('Person (name: Ivan, email: ivan@mail.bg)');
        expect(String(new Teacher('Maria', 'm@mail.bg', 'Math')))
            .to.equal('Teacher (name: Maria, email: m@mail.bg, subject: Math)');
        expect(String(new Student('Gosho', 'g@mail.bg', 'JS Advanced')))
            .to.equal('Student (name: Gosho, email: g@mail.bg, course: JS Advanced)');
    });

    it('04. Extend Prototype', () => {
        class Human {
            toString() { return 'Hello!'; }
        }
        extendPrototype(Human);
        const h = new Human();
        expect(h.species).to.equal('Human');
        expect(h.toSpeciesString()).to.equal('I am a Human. Hello!');
    });

    it('05. Class Hierarchy', () => {
        const { Figure, Circle, Rectangle } = classHierarchy();
        const c = new Circle(5);
        expect(c.area).to.be.closeTo(78.5398, 0.0001);
        expect(String(c)).to.match(/^Figures units: cm Area: 78\.53\d+ - radius: 5$/);

        const r = new Rectangle(3, 4, 'mm');
        expect(r.area).to.equal(1200);
        expect(String(r)).to.equal('Figures units: mm Area: 1200 - width: 30, height: 40');
        r.changeUnits('cm');
        expect(r.area).to.equal(12);
        expect(r).to.be.instanceOf(Figure);
    });
});
