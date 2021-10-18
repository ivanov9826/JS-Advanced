function carFactory(obj) {
    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    };
    let car = {};
    car.model = obj.model;
    if (obj.power <= 90) {
        car.engine = engines.smallEngine;
    } else if (obj.power > 90 && obj.power <= 120) {
        car.engine = engines.normalEngine;
    } else {
        car.engine = engines.monsterEngine;
    };
    car.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    let wheel = obj.wheelsize;
    if (wheel % 2 == 0) {
        wheel -= 1;
    }
    car.wheels = [wheel, wheel, wheel, wheel];
    return car;
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
))