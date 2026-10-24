function autoEngineeringCompany(input) {
    const brands = new Map();
    for (const line of input) {
        const [brand, model, count] = line.split(' | ');
        if (!brands.has(brand)) brands.set(brand, new Map());
        const models = brands.get(brand);
        models.set(model, (models.get(model) || 0) + Number(count));
    }
    for (const [brand, models] of brands) {
        console.log(brand);
        for (const [model, count] of models) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

module.exports = autoEngineeringCompany;
