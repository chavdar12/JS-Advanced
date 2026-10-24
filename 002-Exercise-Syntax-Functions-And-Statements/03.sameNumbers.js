function sameNumbers(number) {
    const digits = String(number).split('').map(Number);
    console.log(digits.every((d) => d === digits[0]));
    console.log(digits.reduce((sum, d) => sum + d, 0));
}

module.exports = sameNumbers;
