const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Pascal or Camel Case', () => {
    async function transform(text, convention) {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        doc.getElementById('text').value = text;
        doc.getElementById('naming-convention').value = convention;
        doc.querySelector('input[type=button]').click();
        return doc.getElementById('result').textContent;
    }

    it('converts to Camel Case', async () => {
        expect(await transform('this is an example', 'Camel Case')).to.equal('thisIsAnExample');
    });
    it('converts to Pascal Case', async () => {
        expect(await transform('secOND eXamPLE', 'Pascal Case')).to.equal('SecondExample');
    });
    it('rejects an unknown convention', async () => {
        expect(await transform('Invalid Input', 'Another Case')).to.equal('Error!');
    });
});
