function squareOfStars(size = 5) {
    const row = new Array(size).fill('*').join(' ');
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}

module.exports = squareOfStars;
