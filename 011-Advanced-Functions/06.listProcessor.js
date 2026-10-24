function listProcessor(commands) {
    let list = [];
    const actions = {
        add: (s) => list.push(s),
        remove: (s) => { list = list.filter((x) => x !== s); },
        print: () => console.log(list.join(',')),
    };
    for (const command of commands) {
        const [action, arg] = command.split(' ');
        actions[action](arg);
    }
}

module.exports = listProcessor;
