function townsToJSON(input) {
    const parse = (line) => line.split('|').map((x) => x.trim()).filter(Boolean);
    const [townKey, latKey, lngKey] = parse(input[0]);
    const towns = input.slice(1).map((line) => {
        const [town, lat, lng] = parse(line);
        return {
            [townKey]: town,
            [latKey]: Number(Number(lat).toFixed(2)),
            [lngKey]: Number(Number(lng).toFixed(2)),
        };
    });
    console.log(JSON.stringify(towns));
}

module.exports = townsToJSON;
