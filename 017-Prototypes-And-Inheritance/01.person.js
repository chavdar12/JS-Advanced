class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        // Ignore values that are not exactly "first last".
        if (parts.length === 2 && parts.every(Boolean)) {
            [this.firstName, this.lastName] = parts;
        }
    }
}

module.exports = Person;
