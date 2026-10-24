function lastKNumbersSequence(n, k) {
    const result = [1];
    for (let i = 1; i < n; i++) {
        result.push(result.slice(-k).reduce((sum, x) => sum + x, 0));
    }
    return result;
}

module.exports = lastKNumbersSequence;
