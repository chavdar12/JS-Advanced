function colorize() {
    document.querySelectorAll('table tr:nth-child(even)').forEach((row) => {
        row.style.background = 'teal';
    });
}
