function negativePositiveNumbers(arr) {
    const result = [];
    for (const n of arr) {
        if (n < 0) result.unshift(n);
        else result.push(n);
    }
    result.forEach((n) => console.log(n));
}

module.exports = negativePositiveNumbers;
