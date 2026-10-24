// Given by the task; the exercise is to write the tests.
const mathEnforcer = {
    addFive(num) {
        if (typeof num !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen(num) {
        if (typeof num !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return undefined;
        }
        return num1 + num2;
    },
};

module.exports = mathEnforcer;
