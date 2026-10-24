const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Sum Table', () => {
    it('sums the cost column', async () => {
        const window = await loadPage(path.join(__dirname, 'tamplate.html'));
        window.document.querySelector('button').click();
        expect(window.document.getElementById('sum').textContent).to.equal('9.62');
    });
});
