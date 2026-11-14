// The class under test - implemented from the task specification.
class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();
        this.nextId = 0;
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        const id = this.nextId++;
        this.data.set(id, entity);
        return id;
    }

    getId(id) {
        return this._get(id);
    }

    update(id, newEntity) {
        this._get(id);
        this._validate(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        this._get(id);
        this.data.delete(id);
    }

    _get(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    _validate(entity) {
        for (const [prop, type] of Object.entries(this.props)) {
            if (!(prop in entity)) {
                throw new Error(`Property ${prop} is missing from the entity!`);
            }
            if (typeof entity[prop] !== type) {
                throw new TypeError(`Property ${prop} is of incorrect type!`);
            }
        }
    }
}

module.exports = { Repository };
