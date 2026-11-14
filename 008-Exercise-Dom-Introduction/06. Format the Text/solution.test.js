const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Format the Text', () => {
    it('groups sentences into paragraphs of three', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        doc.getElementById('input').value = 'One. Two. Three. Four.';
        doc.getElementById('formatItBtn').click();
        const paragraphs = Array.from(doc.querySelectorAll('#output p')).map((p) => p.textContent);
        expect(paragraphs).to.deep.equal(['One. Two. Three.', 'Four.']);

        doc.getElementById('formatItBtn').click();
        expect(doc.querySelectorAll('#output p')).to.have.length(2);
    });
});
