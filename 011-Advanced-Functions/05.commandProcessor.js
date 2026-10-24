function solution() {
    let text = '';
    return {
        append(str) {
            text += str;
        },
        removeStart(n) {
            text = text.slice(n);
        },
        removeEnd(n) {
            text = text.slice(0, -n || text.length);
        },
        print() {
            console.log(text);
        },
    };
}

module.exports = solution;
