function subSum(arr, start, end) {
    if (!Array.isArray(arr)) return NaN;
    const from = Math.max(start, 0);
    const to = Math.min(end, arr.length - 1);
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}

module.exports = subSum;
