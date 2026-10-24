function biggerHalf(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    return sorted.slice(Math.floor(sorted.length / 2));
}

module.exports = biggerHalf;
