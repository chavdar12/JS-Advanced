const { expect } = require('chai');
const SummerCamp = require('./02.summerCamp');

describe('SummerCamp', () => {
    let camp;
    beforeEach(() => {
        camp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
    });

    it('registers participants (example 1)', () => {
        expect(camp.registerParticipant('Petar Petarson', 'student', 200)).to.equal('The money is not enough to pay the stay at the camp.');
        expect(camp.registerParticipant('Petar Petarson', 'student', 300)).to.equal('The Petar Petarson was successfully registered.');
        expect(camp.registerParticipant('Petar Petarson', 'student', 300)).to.equal('The Petar Petarson is already registered at the camp.');
        expect(() => camp.registerParticipant('Leila Wolfe', 'childd', 200)).to.throw('Unsuccessful registration at the camp.');
    });

    it('unregisters participants (example 2)', () => {
        camp.registerParticipant('Petar Petarson', 'student', 300);
        expect(() => camp.unregisterParticipant('Petar')).to.throw('The Petar is not registered in the camp.');
        expect(camp.unregisterParticipant('Petar Petarson')).to.equal('The Petar Petarson removed successfully.');
        expect(camp.listOfParticipants).to.be.empty;
    });

    it('plays games and prints the camp (examples 3 and 4)', () => {
        camp.registerParticipant('Petar Petarson', 'student', 300);
        expect(camp.timeToPlay('Battleship', 'Petar Petarson')).to.equal('The Petar Petarson successfully completed the game Battleship.');
        camp.registerParticipant('Sara Dickinson', 'child', 200);
        expect(() => camp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson')).to.throw('Choose players with equal condition.');
        camp.registerParticipant('Dimitur Kostov', 'student', 300);
        expect(camp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov')).to.equal('The Petar Petarson is winner in the game WaterBalloonFights.');
        expect(camp.toString()).to.equal([
            'Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria',
            'Petar Petarson - student - 120 - 1',
            'Sara Dickinson - child - 100 - 0',
            'Dimitur Kostov - student - 100 - 0',
        ].join('\n'));
    });

    it('rejects unknown players and handles a draw', () => {
        expect(() => camp.timeToPlay('Battleship', 'Nobody')).to.throw('Invalid entered name/s.');
        camp.registerParticipant('A', 'child', 150);
        camp.registerParticipant('B', 'child', 150);
        expect(camp.timeToPlay('WaterBalloonFights', 'A', 'B')).to.equal('There is no winner.');
    });
});
