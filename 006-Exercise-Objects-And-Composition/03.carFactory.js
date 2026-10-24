function carFactory({ model, power, color, carriage, wheelsize }) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ];
    const wheel = wheelsize % 2 === 0 ? wheelsize - 1 : Math.floor(wheelsize);
    return {
        model,
        engine: engines.find((e) => e.power >= power),
        carriage: { type: carriage, color },
        wheels: new Array(4).fill(wheel),
    };
}

module.exports = carFactory;
