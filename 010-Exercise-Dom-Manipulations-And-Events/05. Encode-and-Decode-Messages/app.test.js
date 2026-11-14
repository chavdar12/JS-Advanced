const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Encode and Decode Messages', () => {
    it('shifts char codes by one each way', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const [input, output] = doc.querySelectorAll('textarea');
        const [encode, decode] = doc.querySelectorAll('#main button');
        input.value = 'Hello';
        encode.click();
        expect(output.value).to.equal('Ifmmp');
        expect(input.value).to.equal('');
        decode.click();
        expect(output.value).to.equal('Hello');
    });
});
