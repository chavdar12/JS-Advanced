function spiralMatrix(rows, cols) {
    const matrix = Array.from({ length: rows }, () => new Array(cols));
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) matrix[top][c] = value++;
        top++;
        for (let r = top; r <= bottom; r++) matrix[r][right] = value++;
        right--;
        if (top <= bottom) {
            for (let c = right; c >= left; c--) matrix[bottom][c] = value++;
            bottom--;
        }
        if (left <= right) {
            for (let r = bottom; r >= top; r--) matrix[r][left] = value++;
            left++;
        }
    }
    matrix.forEach((row) => console.log(row.join(' ')));
}

module.exports = spiralMatrix;
