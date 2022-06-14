function solve(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
    }

    let firstDiagonalSum = 0, secondDiagonalSum = 0;
    let secondDiagonalPos = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][secondDiagonalPos];
        secondDiagonalPos--;
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        secondDiagonalPos = matrix.length - 1;
        for (let i = 0; i < matrix.length; i++) {
            matrix[i].map((num, index) => {
                if (index !== i && index !== secondDiagonalPos) {
                    matrix[i][index] = firstDiagonalSum;
                }
            })
            secondDiagonalPos--;
        }
    }

    matrix.forEach(line => console.log(line.join(' ')));
}