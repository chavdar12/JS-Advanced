function cardCreator(face, suit) {

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let cardSuits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666 ",
        C: "\u2663"
    };


    if (!faces.includes(face)) {
        throw new Error('Such a face does not exist');
    }
    if (Object.keys(cardSuits).includes(suit) === false) {
        throw new Error("Suit doesnt exist");
    }

    return {
        face,
        suit: cardSuits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

const card1 = cardCreator('A', 'S');
console.log(card1.toString());
const card2 = cardCreator('10', 'H');
console.log(card2.toString());
const card3 = cardCreator('2', 'Y');
console.log(card3.toString());
