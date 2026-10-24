class List {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(element) {
        this.items.push(element);
        this.items.sort((a, b) => a - b);
        this.size = this.items.length;
    }

    remove(index) {
        this.#validate(index);
        this.items.splice(index, 1);
        this.size = this.items.length;
    }

    get(index) {
        this.#validate(index);
        return this.items[index];
    }

    #validate(index) {
        if (index < 0 || index >= this.items.length) throw new RangeError('Index is out of range');
    }
}

module.exports = List;
