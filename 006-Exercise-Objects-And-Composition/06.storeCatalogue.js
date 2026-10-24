function storeCatalogue(input) {
    const products = input
        .map((line) => line.split(' : '))
        .sort(([a], [b]) => a.localeCompare(b));

    let letter = '';
    for (const [name, price] of products) {
        if (name[0].toUpperCase() !== letter) {
            letter = name[0].toUpperCase();
            console.log(letter);
        }
        console.log(`  ${name}: ${price}`);
    }
}

module.exports = storeCatalogue;
