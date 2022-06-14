////old style class making:
//
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Object.defineProperty(Person.prototype, 'fullName', {
//     // get : function (){
//     //     return `${this.firstName} ${this.lastName}`
//     // },
//     set : function (value){
//         let [first, last] = value.split(' ');
//         this.firstName = first;
//         this.lastName = last;
//     }
// });

// sugar syntax for class (ES6+)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let pattern = /^[^\s]+\s[^\s]+$/;

        if (pattern.test(value)) {
            let [first, last] = value.split(' ');
            this.firstName = first;
            this.lastName = last;
        }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
