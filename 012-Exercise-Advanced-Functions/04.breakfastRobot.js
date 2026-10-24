function solution() {
    const stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const commands = {
        restock(element, quantity) {
            stock[element] += quantity;
            return 'Success';
        },
        prepare(recipe, quantity) {
            const needed = Object.entries(recipes[recipe]);
            const missing = needed.find(([element, amount]) => stock[element] < amount * quantity);
            if (missing) return `Error: not enough ${missing[0]} in stock`;
            needed.forEach(([element, amount]) => { stock[element] -= amount * quantity; });
            return 'Success';
        },
        report() {
            return Object.entries(stock).map(([element, qty]) => `${element}=${qty}`).join(' ');
        },
    };

    return (input) => {
        const [command, item, quantity] = input.split(' ');
        return commands[command](item, Number(quantity));
    };
}

module.exports = solution;
