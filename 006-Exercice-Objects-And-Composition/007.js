function solve(array) {

    let object = {};
    let result = [];

    for (let i = 1; i < array.length; i++) {
        let substring = array[i].substring(2, array[i].length - 2);

        let [town, latitude, longitude] = substring.split(' | ');
        latitude = Number(Number(latitude.toFixed(2)));
        longitude = Number(Number(longitude).toFixed(2));

        object = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        };
        result.push(object);
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
