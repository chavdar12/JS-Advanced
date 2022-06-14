(function solve() {
    String.prototype.ensureStart = function (str) {
        let isStartWith = this.startsWith(str);

        if (isStartWith) {
            return this.toString();
        } else {
            return str + this;
        }
    };

    String.prototype.ensureEnd = function (str) {
        let isEndWiht = this.endsWith(str);

        if (isEndWiht) {
            return this.toString();
        } else {
            return this + str;
        }
    };

    String.prototype.isEmpty = function () {
        return this.toString().localeCompare("") === 0;
    };

    String.prototype.truncate = function (n) {

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        } else {
            let spaceIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');

            if (spaceIndex === -1) {
                return this.substring(0, n - 3) + '...';
            } else {
                // let result = '';
                // while(true){
                //     result = this.substring(0, spaceIndex);

                //     if(result.length + 3 <= n){
                //         return result + '...';
                //     }
                //     spaceIndex = result.lastIndexOf(' ');

                //     if(spaceIndex == -1){
                //         return result.substring(0, n-3) + '...';
                //     }
                // }

                return this.substring(0, spaceIndex) + '...';
            }
        }
    };

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {

            let actualPlaceholder = `{${i}}`;
            let index = str.indexOf(actualPlaceholder);
            // if(index == -1){
            //     return str;
            // }
            while (index !== -1) {
                str = str.replace(actualPlaceholder, params[i]);
                index = str.indexOf(actualPlaceholder);
            }

        }

        return str;
    }

})();

let str = 'my string';
//str.substr(0,)
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0}, {0} {1}',
    'dog');

console.log(str);
