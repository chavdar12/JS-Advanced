const { expect } = require('chai');
const { captureLog } = require('../test/console');

const subSum = require('./01.subSum');
const createCard = require('./02.playingCards');
const printDeckOfCards = require('./03.deckOfCards');

describe('Unit Testing and Error Handling - Lab (01-03)', () => {
    it('01. Sub Sum', () => {
        expect(subSum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
        expect(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.be.closeTo(3.3, 1e-9);
        expect(subSum([10, 'twenty', 30, 40], 0, 2)).to.be.NaN;
        expect(subSum([], 1, 2)).to.equal(0);
        expect(subSum('text', 0, 2)).to.be.NaN;
    });

    it('02. Playing Cards', () => {
        expect(createCard('A', 'S').toString()).to.equal('A♠');
        expect(createCard('10', 'H').toString()).to.equal('10♥');
        expect(() => createCard('1', 'C')).to.throw(Error);
        expect(() => createCard('2', 'X')).to.throw(Error);
    });

    it('03. Deck of Cards', () => {
        expect(captureLog(() => printDeckOfCards(['AS', '10D', 'KH', '2C'])))
            .to.deep.equal(['A♠ 10♦ K♥ 2♣']);
        expect(captureLog(() => printDeckOfCards(['5S', '3D', 'QD', '1C']))).to.deep.equal(['Invalid card: 1C']);
    });
});
