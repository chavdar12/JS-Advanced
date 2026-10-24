function createSortedList() {
    const items = [];
    const inRange = (index) => index >= 0 && index < items.length;
    return {
        add(element) {
            items.push(element);
            items.sort((a, b) => a - b);
        },
        remove(index) {
            if (inRange(index)) items.splice(index, 1);
        },
        get(index) {
            return inRange(index) ? items[index] : undefined;
        },
        get size() {
            return items.length;
        },
    };
}

module.exports = createSortedList;
