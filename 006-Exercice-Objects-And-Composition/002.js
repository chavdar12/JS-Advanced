function carAssembler(obj) {

    function chooseEngine(power) {
        let engine = {
            power: power,
            volume: 0
        };

        if (power <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (power <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function checkWheels(diameter) {
        if (diameter % 2 === 0) {
            diameter -= 1;
        }

        return diameter;
    }

    return {
        model: obj.model,
        engine: chooseEngine(obj.power),
        carriage: {
            type: obj.carriage,
            color: obj.color,
        },
        wheels: new Array(4).fill(checkWheels(obj.wheelsize), 0, 4)
    };
}

carAssembler({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

carAssembler({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);
