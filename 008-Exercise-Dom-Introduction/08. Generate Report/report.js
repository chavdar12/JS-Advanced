function generateReport() {
    const columns = Array.from(document.querySelectorAll('thead th input'))
        .map((input, index) => ({ name: input.name, index, checked: input.checked }))
        .filter((c) => c.checked);

    const report = Array.from(document.querySelectorAll('tbody tr')).map((row) => {
        const obj = {};
        for (const c of columns) {
            obj[c.name] = row.children[c.index].textContent;
        }
        return obj;
    });
    document.getElementById('output').value = JSON.stringify(report);
}
