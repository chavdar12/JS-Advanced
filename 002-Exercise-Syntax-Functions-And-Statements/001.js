function calculateFruits(fruit, weight, money) {
    const moneyNeeded = (weight / 1000) * money;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

calculateFruits('orange', 2500, 1.80);
calculateFruits('apple', 1563, 2.35);
