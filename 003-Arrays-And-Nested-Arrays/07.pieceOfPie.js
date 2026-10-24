function pieceOfPie(flavors, first, last) {
    return flavors.slice(flavors.indexOf(first), flavors.indexOf(last) + 1);
}

module.exports = pieceOfPie;
