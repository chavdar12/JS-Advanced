const person = {
    firstName: 'Pesho',
    lastName: 'Georgiev',
    introduce() {
        const getFullName = () => {
            return this.firstName + ' ' + this.lastName;
        }

        console.log(`Hello, my name is ${getFullName()}`)
    }
};

person.introduce();
