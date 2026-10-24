function roadRadar(speed, area) {
    const limit = { motorway: 130, interstate: 90, city: 50, residential: 20 }[area];
    const over = speed - limit;

    if (over <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }
    let status = 'reckless driving';
    if (over <= 20) status = 'speeding';
    else if (over <= 40) status = 'excessive speeding';
    console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`);
}

module.exports = roadRadar;
