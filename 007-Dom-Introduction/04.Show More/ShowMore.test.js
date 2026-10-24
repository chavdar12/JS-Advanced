const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Show More', () => {
    it('hides the link and shows the text', async () => {
        const window = await loadPage(path.join(__dirname, 'tamplate.html'));
        const doc = window.document;
        doc.getElementById('more').click();
        expect(doc.getElementById('more').style.display).to.equal('none');
        expect(doc.getElementById('text').style.display).to.equal('inline');
    });
});
