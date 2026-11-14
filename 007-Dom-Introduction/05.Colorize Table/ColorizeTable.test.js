const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Colorize Table', () => {
    it('colors only the even rows teal', async () => {
        const window = await loadPage(path.join(__dirname, 'tamplate.html'));
        window.document.querySelector('button').click();
        const backgrounds = Array.from(window.document.querySelectorAll('tr')).map((r) => r.style.background);
        expect(backgrounds).to.deep.equal(['', 'teal', '', 'teal', '']);
    });
});
