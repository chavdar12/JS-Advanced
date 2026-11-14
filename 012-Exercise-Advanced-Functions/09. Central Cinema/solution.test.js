const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Central Cinema', () => {
    async function setup() {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const add = (name, hall, price) => {
            const inputs = doc.querySelectorAll('#container input');
            [name, hall, price].forEach((v, i) => { inputs[i].value = v; });
            doc.querySelector('#container button').click();
        };
        return { doc, add };
    }

    it('adds valid movies only', async () => {
        const { doc, add } = await setup();
        add('Joker', 'IMAX', 'abc');
        add('', 'IMAX', '10');
        add('Joker', 'IMAX', '10');
        const movies = doc.querySelectorAll('#movies li');
        expect(movies).to.have.length(1);
        expect(movies[0].querySelector('span').textContent).to.equal('Joker');
        expect(movies[0].querySelector('strong').textContent).to.equal('Hall: IMAX');
        expect(movies[0].querySelector('div strong').textContent).to.equal('10.00');
    });

    it('archives with a total, deletes and clears', async () => {
        const { doc, add } = await setup();
        add('Joker', 'IMAX', '12.5');
        add('Dune', 'Hall 2', '8');
        const [joker, dune] = doc.querySelectorAll('#movies li');

        joker.querySelector('input').value = 'x';
        joker.querySelector('button').click();
        expect(doc.querySelectorAll('#archive li')).to.have.length(0);

        joker.querySelector('input').value = '4';
        joker.querySelector('button').click();
        dune.querySelector('input').value = '2';
        dune.querySelector('button').click();
        const archived = doc.querySelectorAll('#archive li');
        expect(archived[0].querySelector('strong').textContent).to.equal('Total amount: 50.00');
        expect(doc.querySelectorAll('#movies li')).to.have.length(0);

        archived[0].querySelector('button').click();
        expect(doc.querySelectorAll('#archive li')).to.have.length(1);
        doc.querySelector('#archive > button').click();
        expect(doc.querySelectorAll('#archive li')).to.have.length(0);
    });
});
