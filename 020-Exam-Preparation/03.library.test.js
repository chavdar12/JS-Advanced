const { expect } = require('chai');
const library = require('./03.library');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('charges the standard price after 1980', () => {
            expect(library.calcPriceOfBook('Troy', 1981)).to.equal('Price of Troy is 20.00');
        });

        it('gives 50% off up to and including 1980', () => {
            expect(library.calcPriceOfBook('Troy', 1980)).to.equal('Price of Troy is 10.00');
            expect(library.calcPriceOfBook('Troy', 1900)).to.equal('Price of Troy is 10.00');
        });

        it('validates the input', () => {
            expect(() => library.calcPriceOfBook(5, 2000)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Troy', '2000')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('Troy', 1999.5)).to.throw('Invalid input');
        });
    });

    describe('findBook', () => {
        it('throws when there are no books', () => {
            expect(() => library.findBook([], 'Troy')).to.throw('No books currently available');
        });

        it('finds a present book', () => {
            expect(library.findBook(['Troy', 'Life Style'], 'Troy')).to.equal('We found the book you want.');
        });

        it('reports a missing book', () => {
            expect(library.findBook(['Troy'], 'Torronto')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('fits up to 40 books', () => {
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('asks for more shelves above 40', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

        it('validates the input', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(2.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('5')).to.throw('Invalid input');
        });
    });
});
