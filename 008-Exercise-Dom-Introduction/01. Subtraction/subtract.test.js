const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Subtraction', () => {
    it('shows first minus second on load', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        expect(Number(window.document.getElementById('result').textContent)).to.be.closeTo(-8.85, 1e-9);
    });
});
