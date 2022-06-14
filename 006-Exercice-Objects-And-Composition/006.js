function solve(array) {

    let catalogue = {};

    for (let element of array) {
        let [name, price] = element.split(':');
        price = Number(price);

        let index = name[0];

        if (!catalogue[index]) {
            catalogue[index] = {};
        }

        catalogue[index][name] = price;
    }

    let sortedKeysCatalogue = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sortedKeysCatalogue) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));

        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0].trim()}: ${el[1]}`);
        })
    }
}

solve(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);

solve(['Banana : 2', 'Rubic\'s Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);
