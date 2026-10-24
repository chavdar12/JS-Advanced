const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Accordion', () => {
    it('toggles the extra content and the button text', async () => {
        const window = await loadPage(path.join(__dirname, 'accordion.html'));
        const doc = window.document;
        const button = doc.querySelector('.button');
        button.click();
        expect(doc.getElementById('extra').style.display).to.equal('block');
        expect(button.textContent).to.equal('Less');
        button.click();
        expect(doc.getElementById('extra').style.display).to.equal('none');
        expect(button.textContent).to.equal('More');
    });
});
