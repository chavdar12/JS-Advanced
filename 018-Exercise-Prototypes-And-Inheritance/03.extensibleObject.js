function extensibleObject() {
    const proto = {};
    const obj = Object.create(proto);
    obj.extend = function (template) {
        for (const [key, value] of Object.entries(template)) {
            if (typeof value === 'function') proto[key] = value;
            else obj[key] = value;
        }
    };
    return obj;
}

module.exports = extensibleObject;
