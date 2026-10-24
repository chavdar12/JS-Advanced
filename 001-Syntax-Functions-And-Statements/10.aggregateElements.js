function aggregateElements(elements) {
    console.log(elements.reduce((sum, x) => sum + x, 0));
    console.log(elements.reduce((sum, x) => sum + 1 / x, 0));
    console.log(elements.join(''));
}

module.exports = aggregateElements;
