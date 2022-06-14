function solve(array) {
    let heroInventory = {};

    let objectArray = [];

    for (let element of array) {
        const tokens = element.split('/');
        let heroName = tokens[0].trim();
        let heroLevel = Number(tokens[1]);

        let items = [];

        items = items ? tokens[2].trim().split(', ') : [];


        heroInventory = {
            name: heroName,
            level: heroLevel,
            items: items,
        };

        objectArray.push(heroInventory);
    }
    console.log(JSON.stringify(objectArray));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);
