function printEveryNthElement(arr, step) {
    return arr.filter((_, i) => i % step === 0);
}

module.exports = printEveryNthElement;
