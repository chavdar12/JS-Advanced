const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Collect List Items', () => {
    it('writes each item on its own line', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        window.document.querySelector('button').click();
        expect(window.document.getElementById('result').value).to.equal('first item\nsecond item\nthird item');
    });
});
