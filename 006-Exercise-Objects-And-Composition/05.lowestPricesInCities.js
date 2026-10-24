function lowestPricesInCities(input) {
    const products = {};
    for (const line of input) {
        const [town, product, price] = line.split(' | ');
        const value = Number(price);
        // Strictly lower: on a tie the town seen first keeps the product.
        if (!products[product] || value < products[product].price) {
            products[product] = { town, price: value };
        }
    }
    for (const [product, { town, price }] of Object.entries(products)) {
        console.log(`${product} -> ${price} (${town})`);
    }
}

module.exports = lowestPricesInCities;
