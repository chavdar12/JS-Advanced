const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Highlight Active', () => {
    it('adds "focused" to the parent of the focused input only', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const inputs = window.document.querySelectorAll('input');
        inputs[1].focus();
        expect(inputs[1].parentElement.classList.contains('focused')).to.equal(true);
        inputs[2].focus();
        expect(inputs[1].parentElement.classList.contains('focused')).to.equal(false);
        expect(inputs[2].parentElement.classList.contains('focused')).to.equal(true);
    });
});
