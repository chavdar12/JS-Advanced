class Textbox {
    constructor(selector, invalidSymbols) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidSymbols;
        this._value = '';
        for (const element of Array.from(this._elements)) {
            element.addEventListener('input', () => {
                this.value = element.value;
            });
        }
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (const element of Array.from(this._elements)) element.value = value;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !Array.from(this._elements).some((e) => this._invalidSymbols.test(e.value));
    }
}
