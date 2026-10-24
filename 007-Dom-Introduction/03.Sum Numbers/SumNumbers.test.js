const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Sum Numbers', () => {
    it('sums the two inputs as numbers', async () => {
        const window = await loadPage(path.join(__dirname, 'Tamplate.html'));
        const doc = window.document;
        doc.getElementById('num1').value = '2.5';
        doc.getElementById('num2').value = '10';
        doc.querySelector('input[type=button]').click();
        expect(doc.getElementById('sum').value).to.equal('12.5');
    });
});
