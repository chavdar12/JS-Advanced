function ticTacToe(moves) {
    const board = [[false, false, false], [false, false, false], [false, false, false]];
    const printBoard = () => board.forEach((row) => console.log(row.join('\t')));
    const wins = (p) => {
        const lines = [
            ...board,
            ...[0, 1, 2].map((c) => board.map((row) => row[c])),
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]],
        ];
        return lines.some((line) => line.every((cell) => cell === p));
    };

    let player = 'X';
    let placed = 0;
    for (const move of moves) {
        const [r, c] = move.split(' ').map(Number);
        if (board[r][c] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        board[r][c] = player;
        placed++;
        if (wins(player)) {
            console.log(`Player ${player} wins!`);
            printBoard();
            return;
        }
        if (placed === 9) {
            console.log('The game ended! Nobody wins :(');
            printBoard();
            return;
        }
        player = player === 'X' ? 'O' : 'X';
    }
}

module.exports = ticTacToe;
