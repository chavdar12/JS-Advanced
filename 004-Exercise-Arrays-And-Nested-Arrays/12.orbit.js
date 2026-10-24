function orbit([width, height, x, y]) {
    for (let r = 0; r < height; r++) {
        const row = [];
        for (let c = 0; c < width; c++) {
            row.push(Math.max(Math.abs(r - x), Math.abs(c - y)) + 1);
        }
        console.log(row.join(' '));
    }
}

module.exports = orbit;
