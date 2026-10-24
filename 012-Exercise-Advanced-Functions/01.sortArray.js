function sortArray(arr, order) {
    const compare = order === 'asc' ? (a, b) => a - b : (a, b) => b - a;
    return [...arr].sort(compare);
}

module.exports = sortArray;
