const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Dynamic Validation', () => {
    it('toggles the error class on change', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const input = window.document.getElementById('email');
        const enter = (value) => {
            input.value = value;
            input.dispatchEvent(new window.Event('change'));
            return input.classList.contains('error');
        };
        expect(enter('not-an-email')).to.equal(true);
        expect(enter('ivan@abv.bg')).to.equal(false);
        expect(enter('Ivan@abv.bg')).to.equal(true);
    });
});
