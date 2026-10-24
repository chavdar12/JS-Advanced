function addAndRemoveElements(commands) {
    const result = [];
    commands.forEach((command, i) => {
        if (command === 'add') result.push(i + 1);
        else result.pop();
    });
    console.log(result.length ? result.join('\n') : 'Empty');
}

module.exports = addAndRemoveElements;
