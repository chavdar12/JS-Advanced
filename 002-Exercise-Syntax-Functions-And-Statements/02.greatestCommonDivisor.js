function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    console.log(a);
}

module.exports = greatestCommonDivisor;
