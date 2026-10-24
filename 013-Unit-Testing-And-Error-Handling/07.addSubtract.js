// Given by the task; the exercise is to write the tests.
function createCalculator() {
    let value = 0;
    return {
        add(num) { value += Number(num); },
        subtract(num) { value -= Number(num); },
        get() { return value; },
    };
}

module.exports = createCalculator;
