function cars(commands) {
    const objects = {};
    const actions = {
        create(name, inherit, parent) {
            objects[name] = inherit === 'inherit' ? Object.create(objects[parent]) : {};
        },
        set(name, key, value) {
            objects[name][key] = value;
        },
        print(name) {
            const pairs = [];
            // for...in walks own keys first, then inherited ones.
            for (const key in objects[name]) pairs.push(`${key}:${objects[name][key]}`);
            console.log(pairs.join(','));
        },
    };
    for (const command of commands) {
        const [action, ...args] = command.split(' ');
        actions[action](...args);
    }
}

module.exports = cars;
