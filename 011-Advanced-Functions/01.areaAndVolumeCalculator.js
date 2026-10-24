function solve(area, vol, input) {
    return JSON.parse(input).map((figure) => ({
        area: area.call(figure),
        volume: vol.call(figure),
    }));
}

module.exports = solve;
