// Given by the task; the exercise is to write the tests.
function isOddOrEven(string) {
    if (typeof string !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

module.exports = isOddOrEven;
