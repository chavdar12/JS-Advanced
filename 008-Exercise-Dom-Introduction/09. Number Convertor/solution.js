function solve() {
    const to = document.getElementById('selectMenuTo');
    to.add(new Option('Binary', 'binary'));
    to.add(new Option('Hexadecimal', 'hexadecimal'));

    document.querySelector('#container button').addEventListener('click', () => {
        const number = Number(document.getElementById('input').value);
        const radix = { binary: 2, hexadecimal: 16 }[to.value];
        document.getElementById('result').value = radix ? number.toString(radix).toUpperCase() : '';
    });
}
