function sumOfNumbers(n, m) {
    let sum = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        sum += i;
    }
    console.log(sum);
}

module.exports = sumOfNumbers;
