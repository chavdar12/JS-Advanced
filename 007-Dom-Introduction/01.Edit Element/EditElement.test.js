const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Edit Element', () => {
    it('replaces every occurrence of the match', async () => {
        const window = await loadPage(path.join(__dirname, 'tamplate.html'));
        window.document.querySelector('button').click();
        expect(window.document.getElementById('e1').textContent).to.equal('Hello, Document Object Model!');

        const h1 = window.document.getElementById('e1');
        h1.textContent = 'a-b-a';
        window.editElement(h1, 'a', 'x');
        expect(h1.textContent).to.equal('x-b-x');
    });
});
