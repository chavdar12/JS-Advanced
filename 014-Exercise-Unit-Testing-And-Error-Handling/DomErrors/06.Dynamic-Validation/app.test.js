const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../../test/dom');

describe('Dynamic Validation (DomErrors)', () => {
    it('marks invalid emails with the error class', async () => {
        const window = await loadPage(path.join(__dirname, 'validation.html'));
        const input = window.document.getElementById('email');
        const enter = (value) => {
            input.value = value;
            input.dispatchEvent(new window.Event('change'));
            return input.classList.contains('error');
        };
        expect(enter('bad@mail')).to.equal(true);
        expect(enter('good@mail.com')).to.equal(false);
    });
});
