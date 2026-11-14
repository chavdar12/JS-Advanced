// Shared by the 3x3 and 9x9 pages: works for any NxN table of inputs.
function solve() {
    const table = document.querySelector('#exercise table');
    const rows = Array.from(table.querySelectorAll('tbody tr'), (tr) => Array.from(tr.querySelectorAll('input')));
    const result = document.querySelector('#check p');
    const [checkBtn, clearBtn] = table.querySelectorAll('tfoot button');

    checkBtn.addEventListener('click', () => {
        const n = rows.length;
        const isValidLine = (values) => new Set(values).size === n && values.every((v) => v >= 1 && v <= n);
        const grid = rows.map((row) => row.map((input) => Number(input.value)));
        const solved = grid.every(isValidLine) && grid.every((_, c) => isValidLine(grid.map((row) => row[c])));

        table.style.border = `2px solid ${solved ? 'green' : 'red'}`;
        result.style.color = solved ? 'green' : 'red';
        result.textContent = solved ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
    });

    clearBtn.addEventListener('click', () => {
        rows.flat().forEach((input) => { input.value = ''; });
        table.style.border = 'none';
        result.textContent = '';
    });
}
