const fs = require('fs');
const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Furniture', () => {
    it('generates rows from JSON and buys the checked ones', async () => {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const [input, output] = doc.querySelectorAll('#exercise textarea');
        const [generate, buy] = doc.querySelectorAll('#exercise button');

        input.value = fs.readFileSync(path.join(__dirname, 'furniture.json'), 'utf8');
        generate.click();
        const rows = doc.querySelectorAll('.table tbody tr');
        expect(rows).to.have.length(3);

        rows[1].querySelector('input').checked = true;
        rows[2].querySelector('input').checked = true;
        buy.click();
        expect(output.value).to.equal(
            'Bought furniture: Sofa, Wardrobe\nTotal price: 379.00\nAverage decoration factor: 0.8',
        );
    });
});
