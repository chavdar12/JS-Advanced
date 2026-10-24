function diagonalAttack(rows) {
    const matrix = rows.map((row) => row.split(' ').map(Number));
    const n = matrix.length;
    let main = 0;
    let secondary = 0;
    for (let i = 0; i < n; i++) {
        main += matrix[i][i];
        secondary += matrix[i][n - 1 - i];
    }

    if (main === secondary) {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (r !== c && c !== n - 1 - r) matrix[r][c] = main;
            }
        }
    }
    matrix.forEach((row) => console.log(row.join(' ')));
}

module.exports = diagonalAttack;
