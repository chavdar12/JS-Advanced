const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Simple Calculator', () => {
    it('adds and subtracts via the page buttons', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.getElementById('num1').value = '7';
        doc.getElementById('num2').value = '2.5';
        doc.getElementById('sumButton').click();
        expect(doc.getElementById('result').value).to.equal('9.5');
        doc.getElementById('subtractButton').click();
        expect(doc.getElementById('result').value).to.equal('4.5');
    });
});
