function ticketDatabase(data, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        toString() {
            return `Ticket { destination: ${this.destinationName},
            price: ${this.price.toFixed(1)},
            status: ${this.status}`
        }
    }

    let result = [];
    for (let element of data) {
        const [name, price, status] = element.split('\|');
        let ticket = new Ticket(name, price, status);

        result.push(ticket);
    }

    if (criteria == 'destination') {
        result = result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria == 'status') {
        result = result.sort((a, b) => a.status.localeCompare(b.status));
    } else if (criteria == 'price') {
        result = result.sort((a, b) => a.price - b.price);
    }

    return result;
}

console.log(ticketDatabase(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));

console.log('--------------------------------');

console.log(ticketDatabase(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));

console.log('----------------------------------------------------------------');

console.log(ticketDatabase(['Philadelphia|94.20|available',
        'New York City|148.50|available',
        'New York City|30.5|sold',
        'Boston|20.45|departed'],
    'price'
));
