function solve(input) {

    const townInfo = {};

    for (let town of input) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (townInfo[name] !== undefined) {

            population += townInfo[name];
        }
        townInfo[name] = population;
    }

    for (let town in townInfo) {
        console.log(`${town} : ${townInfo[town]}`);
    }

}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

console.log('--------------------------------------------------------');

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
