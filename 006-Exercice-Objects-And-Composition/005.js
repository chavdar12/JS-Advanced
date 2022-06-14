function solve(array) {

    let townInfo = {};

    for (let element of array) {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);

        if (!townInfo[productName]) {
            townInfo[productName] = {};
        }

        townInfo[productName][townName] = productPrice;
    }

    console.log(townInfo);
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
