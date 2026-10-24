const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Add / Delete', () => {
    it('adds an item with a working [Delete] link', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.getElementById('newItemText').value = 'Milk';
        doc.querySelector('input[type=button]').click();
        const li = doc.querySelector('#items li');
        expect(li.textContent).to.equal('Milk[Delete]');
        li.querySelector('a').click();
        expect(doc.querySelectorAll('#items li')).to.have.length(0);
    });
});
