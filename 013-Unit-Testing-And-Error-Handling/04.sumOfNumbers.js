// Given by the task; the exercise is to write the tests.
function sum(arr) {
    let total = 0;
    for (const num of arr) {
        total += Number(num);
    }
    return total;
}

module.exports = sum;
