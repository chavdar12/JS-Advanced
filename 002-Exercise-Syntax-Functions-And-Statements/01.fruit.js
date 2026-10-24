function fruit(type, grams, pricePerKg) {
    const kg = grams / 1000;
    console.log(`I need $${(kg * pricePerKg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}

module.exports = fruit;
