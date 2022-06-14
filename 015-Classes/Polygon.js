class Polygon {
    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }

    perimeter() {
        return this.sideLengths.reduce((a, b) => a + b, 0);
    }
}
