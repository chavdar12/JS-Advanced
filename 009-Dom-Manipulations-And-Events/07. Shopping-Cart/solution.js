function solve() {
    const output = document.querySelector('textarea');
    const products = [];
    let total = 0;

    document.querySelectorAll('.product').forEach((product) => {
        product.querySelector('.add-product').addEventListener('click', () => {
            const name = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            if (!products.includes(name)) products.push(name);
            total += price;
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        output.value += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`;
        document.querySelectorAll('button').forEach((b) => { b.disabled = true; });
    });
}
