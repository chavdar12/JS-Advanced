function cookingByNumbers(number, ...operations) {
    const actions = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8,
    };
    let value = Number(number);
    for (const op of operations) {
        value = actions[op](value);
        console.log(value);
    }
}

module.exports = cookingByNumbers;
