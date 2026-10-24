const createCard = require('./02.playingCards');

function printDeckOfCards(cards) {
    const deck = [];
    for (const card of cards) {
        try {
            deck.push(createCard(card.slice(0, -1), card.slice(-1)));
        } catch {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(deck.join(' '));
}

module.exports = printDeckOfCards;
