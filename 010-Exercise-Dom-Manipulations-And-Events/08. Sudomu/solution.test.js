const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Sudomu', () => {
    async function check(file, grid) {
        const window = await loadPage(path.join(__dirname, file));
        const doc = window.document;
        const inputs = doc.querySelectorAll('tbody input');
        grid.flat().forEach((v, i) => { inputs[i].value = String(v); });
        doc.querySelectorAll('tfoot button')[0].click();
        return { doc, text: doc.querySelector('#check p').textContent };
    }
    const latin = (n) => Array.from({ length: n }, (_, r) => Array.from({ length: n }, (_, c) => ((r + c) % n) + 1));

    it('accepts a solved 3x3 grid', async () => {
        const { doc, text } = await check('template.html', latin(3));
        expect(text).to.equal('You solve it! Congratulations!');
        expect(doc.querySelector('table').style.border).to.equal('2px solid green');
    });

    it('rejects a repeated value', async () => {
        const { text } = await check('template.html', [[1, 2, 3], [1, 3, 2], [3, 1, 2]]);
        expect(text).to.equal('NOP! You are not done yet...');
    });

    it('works for the 9x9 board too and clears it', async () => {
        const { doc, text } = await check('9x9/template.html', latin(9));
        expect(text).to.equal('You solve it! Congratulations!');
        doc.querySelectorAll('tfoot button')[1].click();
        expect(doc.querySelector('#check p').textContent).to.equal('');
        expect(Array.from(doc.querySelectorAll('tbody input')).every((i) => i.value === '')).to.equal(true);
    });
});
