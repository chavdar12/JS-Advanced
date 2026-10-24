function argumentInfo(...args) {
    const counts = {};
    for (const arg of args) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        counts[type] = (counts[type] || 0) + 1;
    }
    Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}

module.exports = argumentInfo;
