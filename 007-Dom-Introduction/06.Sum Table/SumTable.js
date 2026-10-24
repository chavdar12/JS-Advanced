function sumTable() {
    const cells = Array.from(document.querySelectorAll('table tr td:nth-child(2):not(#sum)'));
    const total = cells.reduce((sum, td) => sum + Number(td.textContent), 0);
    document.getElementById('sum').textContent = total.toFixed(2);
}
