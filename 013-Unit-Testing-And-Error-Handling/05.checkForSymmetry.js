// Given by the task; the exercise is to write the tests.
function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    const reversed = arr.slice(0).reverse();
    return JSON.stringify(arr) === JSON.stringify(reversed);
}

module.exports = isSymmetric;
