function extractIncreasingSubsequence(arr) {
    let biggest = -Infinity;
    return arr.filter((x) => {
        if (x < biggest) return false;
        biggest = x;
        return true;
    });
}

module.exports = extractIncreasingSubsequence;
