function extendProrotype(classToExtend) {

    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

//test data:
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
}


let p = new Person('Pesho', 'abv');

extendProrotype(Person);
console.log(p.toSpeciesString());
console.log(p.__proto__);
