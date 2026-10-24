(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this;
    };
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString();
        if (n < 4) return '.'.repeat(n);

        const words = this.split(' ');
        if (words.length === 1) return `${this.slice(0, n - 3)}...`;
        while (words.length > 1 && words.join(' ').length + 3 > n) words.pop();
        const head = words.join(' ');
        return head.length + 3 > n ? `${head.slice(0, n - 3)}...` : `${head}...`;
    };
    String.format = function (string, ...params) {
        return string.replace(/{(\d+)}/g, (match, i) => (params[i] !== undefined ? params[i] : match));
    };
}());
