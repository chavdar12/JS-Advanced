function equalNeighbors(matrix) {
    let count = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (c + 1 < matrix[r].length && matrix[r][c] === matrix[r][c + 1]) count++;
            if (r + 1 < matrix.length && matrix[r][c] === matrix[r + 1][c]) count++;
        }
    }
    return count;
}

module.exports = equalNeighbors;
