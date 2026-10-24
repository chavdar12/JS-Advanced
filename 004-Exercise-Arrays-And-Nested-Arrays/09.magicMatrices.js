function magicMatrices(matrix) {
    const target = matrix[0].reduce((s, x) => s + x, 0);
    const rowsOk = matrix.every((row) => row.reduce((s, x) => s + x, 0) === target);
    const colsOk = matrix[0].every((_, c) => matrix.reduce((s, row) => s + row[c], 0) === target);
    return rowsOk && colsOk;
}

module.exports = magicMatrices;
