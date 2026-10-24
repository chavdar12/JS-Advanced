const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Shopping Cart', () => {
    it('logs additions and sums unique products on checkout', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const add = doc.querySelectorAll('.add-product');
        add[0].click();
        add[1].click();
        add[0].click();
        doc.querySelector('.checkout').click();
        expect(doc.querySelector('textarea').value).to.equal(
            'Added Bread for 0.80 to the cart.\n'
            + 'Added Milk for 1.09 to the cart.\n'
            + 'Added Bread for 0.80 to the cart.\n'
            + 'You bought Bread, Milk for 2.69.',
        );
        expect(Array.from(doc.querySelectorAll('button')).every((b) => b.disabled)).to.equal(true);
    });
});
