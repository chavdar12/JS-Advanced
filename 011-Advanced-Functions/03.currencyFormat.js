function createFormatter(separator, symbol, symbolFirst, formatter) {
    return (value) => formatter(separator, symbol, symbolFirst, value);
}

// The formatter supplied with the task description.
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return `${symbol} ${result}`;
    return `${result} ${symbol}`;
}

module.exports = { createFormatter, currencyFormatter };
