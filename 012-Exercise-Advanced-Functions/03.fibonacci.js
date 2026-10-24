function getFibonator() {
    let previous = 0;
    let current = 1;
    return () => {
        const result = current;
        [previous, current] = [current, previous + current];
        return result;
    };
}

module.exports = getFibonator;
