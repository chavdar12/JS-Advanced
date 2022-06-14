function extensibleObject() {

    return {
        extend: function (obj) {
            for (const key in obj) {
                if (typeof obj[key] == 'function') {
                    Object.getPrototypeOf(this)[key] = obj[key];
                } else {
                    this[key] = obj[key];
                }
            }
        }
    }
}

const myObj = extensibleObject();
const template = {
    extensionProperty: 'someString'
}
myObj.extend(template);

console.log();
