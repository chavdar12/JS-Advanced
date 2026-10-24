function sortingNumbers(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const result = [];
    while (sorted.length) {
        result.push(sorted.shift());
        if (sorted.length) result.push(sorted.pop());
    }
    return result;
}

module.exports = sortingNumbers;
