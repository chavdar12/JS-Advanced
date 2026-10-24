function classHierarchy() {
    // Dimensions are stored in cm; this scales them to the current units.
    const scale = { m: 0.01, cm: 1, mm: 10 };

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            throw new Error('Not implemented');
        }

        changeUnits(units) {
            this.units = units;
        }

        convert(value) {
            return value * scale[this.units];
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get radius() {
            return this.convert(this._radius);
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.convert(this._width);
        }

        get height() {
            return this.convert(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

module.exports = classHierarchy;
