function heroicInventory(input) {
    const heroes = input.map((line) => {
        const [name, level, items] = line.split(' / ');
        return { name, level: Number(level), items: items ? items.split(', ') : [] };
    });
    console.log(JSON.stringify(heroes));
}

module.exports = heroicInventory;
