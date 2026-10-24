function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = { S: '♠', H: '♥', D: '♦', C: '♣' };
    if (!faces.includes(face)) throw new Error('Invalid face');
    if (!suits[suit]) throw new Error('Invalid suit');

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        },
    };
}

module.exports = createCard;
