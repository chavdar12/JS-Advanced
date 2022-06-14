function getClassHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            if (this.units === 'cm') {
                return 1;
            } else if (this.units === 'mm') {
                return 10;
            } else if (this.units === 'm') {
                return 0.01;
            }
        }

        changeUnits(units) {
            this.units = units;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            let coeficient = super.area;
            return (this.radius * coeficient) ** 2 * Math.PI;
        }

        toString() {
            let coeficient = super.area;
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * coeficient}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            let coeficient = super.area;
            return (this.width * coeficient) * (this.height * coeficient);
        }

        toString() {
            let coeficient = super.area;
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * coeficient}, height: ${this.height * coeficient}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

getClassHierarchy()
