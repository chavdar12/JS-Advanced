function juiceFlavors(input) {
    const quantities = new Map();
    const bottles = new Map();

    for (const line of input) {
        const [juice, quantity] = line.split(' => ');
        const total = (quantities.get(juice) || 0) + Number(quantity);
        const filled = Math.floor(total / 1000);
        quantities.set(juice, total % 1000);
        if (filled > 0) bottles.set(juice, (bottles.get(juice) || 0) + filled);
    }
    for (const [juice, count] of bottles) {
        console.log(`${juice} => ${count}`);
    }
}

module.exports = juiceFlavors;
