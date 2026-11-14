const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Locked Profile', () => {
    it('only toggles details of unlocked profiles', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const button = doc.querySelectorAll('.profile button')[0];
        const hidden = doc.getElementById('user1HiddenFields');

        button.click();
        expect(button.textContent).to.equal('Show more');

        doc.querySelector('input[name=user1Locked][value=unlock]').checked = true;
        button.click();
        expect(hidden.style.display).to.equal('block');
        expect(button.textContent).to.equal('Hide it');
        button.click();
        expect(hidden.style.display).to.equal('none');
    });
});
