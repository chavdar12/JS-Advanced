function mathOperations(a, b, operator) {
    const operations = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b,
        '%': a % b,
        '**': a ** b,
    };
    console.log(operations[operator]);
}

module.exports = mathOperations;
