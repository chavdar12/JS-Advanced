class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        return new Hex(this.value + Number(number));
    }

    minus(number) {
        return new Hex(this.value - Number(number));
    }

    static parse(text) {
        return parseInt(text, 16);
    }
}

module.exports = Hex;
