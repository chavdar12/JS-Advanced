const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Fill Dropdown', () => {
    it('adds an option and clears the inputs', async () => {
        const window = await loadPage(path.join(__dirname, 'filldropdown.html'));
        const doc = window.document;
        doc.getElementById('newItemText').value = 'Sofia';
        doc.getElementById('newItemValue').value = 'sof';
        doc.querySelector('input[type=button]').click();
        const option = doc.querySelector('#menu option');
        expect([option.textContent, option.value]).to.deep.equal(['Sofia', 'sof']);
        expect(doc.getElementById('newItemText').value).to.equal('');
        expect(doc.getElementById('newItemValue').value).to.equal('');
    });
});
