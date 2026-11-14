const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('11. View Model', () => {
    it('links the value property and every input', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const { document } = window;
        const textbox = window.eval('textbox');
        const inputs = Array.from(document.querySelectorAll('.textbox'));

        expect(textbox.elements).to.be.instanceOf(window.NodeList);
        expect(textbox.elements).to.have.length(4);

        textbox.value = 'abc';
        expect(inputs.map((i) => i.value)).to.deep.equal(['abc', 'abc', 'abc', 'abc']);

        inputs[2].value = 'typed';
        inputs[2].dispatchEvent(new window.Event('input'));
        expect(textbox.value).to.equal('typed');
        expect(inputs.map((i) => i.value)).to.deep.equal(['typed', 'typed', 'typed', 'typed']);
    });

    it('is valid only without invalid symbols', async () => {
        const textbox = (await loadPage(path.join(__dirname, 'index.html'))).eval('textbox');
        textbox.value = 'abc123';
        expect(textbox.isValid()).to.equal(true);
        textbox.value = 'abc 123!';
        expect(textbox.isValid()).to.equal(false);
    });
});
