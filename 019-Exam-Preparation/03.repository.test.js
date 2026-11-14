const { expect } = require('chai');
const { Repository } = require('./03.repository');

describe('Repository', () => {
    const props = { name: 'string', age: 'number', birthday: 'object' };
    const pesho = () => ({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
    let repo;

    beforeEach(() => {
        repo = new Repository(props);
    });

    describe('instantiation', () => {
        it('stores props and starts empty', () => {
            expect(repo.props).to.deep.equal(props);
            expect(repo.data).to.be.instanceOf(Map);
            expect(repo.count).to.equal(0);
        });
    });

    describe('add', () => {
        it('returns sequential ids and stores the entity', () => {
            expect(repo.add(pesho())).to.equal(0);
            expect(repo.add(pesho())).to.equal(1);
            expect(repo.count).to.equal(2);
            expect(repo.getId(1)).to.deep.equal(pesho());
        });

        it('throws for a missing property', () => {
            expect(() => repo.add({ name: 'Pesho', age: 22 })).to.throw(Error, 'Property birthday is missing from the entity!');
        });

        it('throws a TypeError for a wrong type', () => {
            expect(() => repo.add({ name: 'Pesho', age: '22', birthday: new Date() })).to.throw(TypeError, 'Property age is of incorrect type!');
        });
    });

    describe('getId', () => {
        it('throws for an unknown id', () => {
            expect(() => repo.getId(5)).to.throw('Entity with id: 5 does not exist!');
        });
    });

    describe('update', () => {
        it('replaces the entity', () => {
            repo.add(pesho());
            const gosho = { ...pesho(), name: 'Gosho' };
            repo.update(0, gosho);
            expect(repo.getId(0)).to.deep.equal(gosho);
        });

        it('throws for an unknown id', () => {
            expect(() => repo.update(3, pesho())).to.throw('Entity with id: 3 does not exist!');
        });

        it('validates the new entity', () => {
            repo.add(pesho());
            expect(() => repo.update(0, { name: 'Gosho' })).to.throw('Property age is missing from the entity!');
            expect(() => repo.update(0, { ...pesho(), birthday: 'x' })).to.throw(TypeError);
        });
    });

    describe('del', () => {
        it('removes the entity', () => {
            repo.add(pesho());
            repo.add(pesho());
            repo.del(0);
            expect(repo.count).to.equal(1);
            expect(() => repo.getId(0)).to.throw();
        });

        it('throws for an unknown id', () => {
            expect(() => repo.del(9)).to.throw('Entity with id: 9 does not exist!');
        });
    });
});
