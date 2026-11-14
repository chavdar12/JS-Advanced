const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('List of Items', () => {
    it('appends the typed item and clears the input', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.getElementById('newItemText').value = 'Third';
        doc.querySelector('input[type=button]').click();
        const items = Array.from(doc.querySelectorAll('#items li')).map((li) => li.textContent);
        expect(items).to.deep.equal(['First', 'Second', 'Third']);
        expect(doc.getElementById('newItemText').value).to.equal('');
    });
});
