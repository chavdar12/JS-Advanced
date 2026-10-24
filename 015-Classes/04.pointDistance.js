class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return Math.hypot(a.x - b.x, a.y - b.y);
    }
}

module.exports = Point;
