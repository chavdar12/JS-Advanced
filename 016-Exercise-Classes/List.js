class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index >= 0 && index <= this.list.length - 1) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index <= this.list.length - 1) {
            return this.list[index];
        }
    }
}

let list = new List();

for (let i = 0; i < 5; i++) {
    list.add(i);
}
list.remove(0);

console.log(list);
