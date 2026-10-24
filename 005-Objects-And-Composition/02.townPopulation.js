function townPopulation(entries) {
    const towns = {};
    for (const entry of entries) {
        const [town, population] = entry.split(' <-> ');
        towns[town] = (towns[town] || 0) + Number(population);
    }
    for (const [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`);
    }
}

module.exports = townPopulation;
