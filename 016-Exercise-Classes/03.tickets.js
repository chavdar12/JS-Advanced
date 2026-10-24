function tickets(descriptions, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const compare = criteria === 'price'
        ? (a, b) => a.price - b.price
        : (a, b) => a[criteria].localeCompare(b[criteria]);

    return descriptions
        .map((line) => {
            const [destination, price, status] = line.split('|');
            return new Ticket(destination, Number(price), status);
        })
        .sort(compare);
}

module.exports = tickets;
