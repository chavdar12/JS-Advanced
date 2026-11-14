const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Table - Search Engine', () => {
    it('selects matching rows case-insensitively and clears the field', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const search = (text) => {
            doc.getElementById('searchField').value = text;
            doc.getElementById('searchBtn').click();
        };
        const selected = () => Array.from(doc.querySelectorAll('tbody tr.select'))
            .map((r) => r.children[0].textContent);

        search('SoftUni');
        expect(selected()).to.deep.equal(['Max Peterson', 'Philip Anderson']);
        expect(doc.getElementById('searchField').value).to.equal('');

        search('gmail');
        expect(selected()).to.deep.equal(['Sam Lima', 'Eva Longoria']);
    });
});
