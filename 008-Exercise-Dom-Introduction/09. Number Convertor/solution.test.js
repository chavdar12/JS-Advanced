const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Number Convertor', () => {
    async function convert(value, to) {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        doc.getElementById('input').value = value;
        doc.getElementById('selectMenuTo').value = to;
        doc.querySelector('#container button').click();
        return doc.getElementById('result').value;
    }

    it('converts to binary', async () => {
        expect(await convert('10', 'binary')).to.equal('1010');
    });
    it('converts to uppercase hexadecimal', async () => {
        expect(await convert('255', 'hexadecimal')).to.equal('FF');
    });
});
