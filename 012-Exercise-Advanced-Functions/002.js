function solve() {
    let data = {};

    Array.from(arguments).forEach((arg) => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!data[type]) {
            data[type] = 0;
        }

        data[type]++;
    });

    Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .forEach((key) => console.log(`${key} = ${data[key]}`));

}

solve('cat', 42, function () {
    console.log('Hello world!');
});
