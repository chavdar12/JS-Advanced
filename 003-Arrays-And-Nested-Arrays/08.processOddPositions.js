function processOddPositions(arr) {
    return arr.filter((_, i) => i % 2 === 1).map((x) => x * 2).reverse().join(' ');
}

module.exports = processOddPositions;
