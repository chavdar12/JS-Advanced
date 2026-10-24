function solve() {
    const [input, output] = document.querySelectorAll('#exercise textarea');
    const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');
    const tbody = document.querySelector('.table tbody');

    generateBtn.addEventListener('click', () => {
        for (const item of JSON.parse(input.value)) {
            const row = document.createElement('tr');
            row.innerHTML = '<td><img></td><td><p></p></td><td><p></p></td><td><p></p></td><td><input type="checkbox"></td>';
            row.querySelector('img').src = item.img;
            const [name, price, decFactor] = row.querySelectorAll('p');
            name.textContent = item.name;
            price.textContent = item.price;
            decFactor.textContent = item.decFactor;
            tbody.appendChild(row);
        }
    });

    buyBtn.addEventListener('click', () => {
        const bought = Array.from(tbody.querySelectorAll('tr'))
            .filter((row) => row.querySelector('input[type=checkbox]').checked)
            .map((row) => Array.from(row.querySelectorAll('p'), (p) => p.textContent));
        if (bought.length === 0) return;

        const total = bought.reduce((sum, [, price]) => sum + Number(price), 0);
        const avgFactor = bought.reduce((sum, [, , factor]) => sum + Number(factor), 0) / bought.length;
        output.value = `Bought furniture: ${bought.map(([name]) => name).join(', ')}\n`
            + `Total price: ${total.toFixed(2)}\n`
            + `Average decoration factor: ${avgFactor}`;
    });
}
