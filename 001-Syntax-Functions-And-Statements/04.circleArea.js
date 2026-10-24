function circleArea(input) {
    if (typeof input !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
        return;
    }
    console.log((Math.PI * input ** 2).toFixed(2));
}

module.exports = circleArea;
