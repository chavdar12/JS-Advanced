function createComputerHierarchy() {
    class Component {
        constructor(manufacturer) {
            if (new.target === Component) throw new Error('Cannot instantiate an abstract class');
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Component {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Component {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Component {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Component {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) throw new Error('Cannot instantiate an abstract class');
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    const ensure = (value, Type) => {
        if (!(value instanceof Type)) throw new TypeError(`Expected an instance of ${Type.name}`);
        return value;
    };

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            this._battery = ensure(value, Battery);
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            this._keyboard = ensure(value, Keyboard);
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            this._monitor = ensure(value, Monitor);
        }
    }

    return { Battery, Keyboard, Monitor, Computer, Laptop, Desktop };
}

module.exports = createComputerHierarchy;
