const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Delete from Table', () => {
    it('deletes the matching row or reports not found', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const del = (email) => {
            doc.querySelector('input[name=email]').value = email;
            doc.querySelector('button').click();
            return doc.getElementById('result').textContent;
        };
        expect(del('nick@yahooo.com')).to.equal('Deleted.');
        expect(doc.querySelectorAll('#customers tbody tr')).to.have.length(3);
        expect(del('nick@yahooo.com')).to.equal('Not found.');
    });
});
