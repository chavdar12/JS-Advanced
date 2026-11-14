class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!(condition in this.priceForTheCamp)) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some((p) => p.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const index = this.listOfParticipants.findIndex((p) => p.name === name);
        if (index === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, ...names) {
        const players = names.map((n) => this.listOfParticipants.find((p) => p.name === n));
        if (players.some((p) => !p)) {
            throw new Error('Invalid entered name/s.');
        }
        if (typeOfGame === 'Battleship') {
            players[0].power += 20;
            return `The ${players[0].name} successfully completed the game ${typeOfGame}.`;
        }
        const [first, second] = players;
        if (first.condition !== second.condition) {
            throw new Error('Choose players with equal condition.');
        }
        if (first.power === second.power) {
            return 'There is no winner.';
        }
        const winner = first.power > second.power ? first : second;
        winner.wins += 1;
        return `The ${winner.name} is winner in the game ${typeOfGame}.`;
    }

    toString() {
        const header = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        const lines = [...this.listOfParticipants]
            .sort((a, b) => b.wins - a.wins)
            .map((p) => `${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
        return [header, ...lines].join('\n');
    }
}

module.exports = SummerCamp;
