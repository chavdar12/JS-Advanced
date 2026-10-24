function solve() {
    const words = document.getElementById('text').value.toLowerCase().split(' ').filter(Boolean);
    const convention = document.getElementById('naming-convention').value;
    const capitalize = (w) => w[0].toUpperCase() + w.slice(1);

    let result;
    if (convention === 'Pascal Case') {
        result = words.map(capitalize).join('');
    } else if (convention === 'Camel Case') {
        result = words.map((w, i) => (i === 0 ? w : capitalize(w))).join('');
    } else {
        result = 'Error!';
    }
    document.getElementById('result').textContent = result;
}
