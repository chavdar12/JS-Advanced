function add(number) {
    let sum = number;
    function inner(next) {
        sum += next;
        return inner;
    }
    inner.toString = () => sum;
    return inner;
}

module.exports = add;
