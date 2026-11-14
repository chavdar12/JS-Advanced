const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

async function addFurniture(doc, { model, year, description, price }) {
    doc.getElementById('model').value = model;
    doc.getElementById('year').value = year;
    doc.getElementById('description').value = description;
    doc.getElementById('price').value = price;
    doc.getElementById('add').click();
}

describe('Furniture Store', () => {
    let doc;
    beforeEach(async () => {
        doc = (await loadPage(path.join(__dirname, 'index.html'))).document;
    });

    it('adds a row with the price to two decimals and clears the inputs', async () => {
        await addFurniture(doc, { model: 'Sofa', year: '2020', description: 'Blue', price: '150.5' });
        const info = doc.querySelector('#furniture-list tr.info');
        expect(info.children[0].textContent).to.equal('Sofa');
        expect(info.children[1].textContent).to.equal('150.50');
        expect(doc.getElementById('model').value).to.equal('');
        expect(doc.querySelector('tr.hide td[colspan="3"]').textContent).to.equal('Description: Blue');
    });

    it('ignores invalid input', async () => {
        await addFurniture(doc, { model: 'Sofa', year: '-1', description: 'Blue', price: '10' });
        await addFurniture(doc, { model: '', year: '2020', description: 'Blue', price: '10' });
        expect(doc.querySelectorAll('#furniture-list tr')).to.have.length(0);
    });

    it('toggles the details row', async () => {
        await addFurniture(doc, { model: 'Sofa', year: '2020', description: 'Blue', price: '10' });
        const more = doc.querySelector('.moreBtn');
        const details = doc.querySelector('tr.hide');
        more.click();
        expect(more.textContent).to.equal('Less Info');
        expect(details.style.display).to.equal('contents');
        more.click();
        expect(more.textContent).to.equal('More Info');
        expect(details.style.display).to.equal('none');
    });

    it('buying removes the furniture and adds to the total profit', async () => {
        await addFurniture(doc, { model: 'Sofa', year: '2020', description: 'Blue', price: '10.25' });
        await addFurniture(doc, { model: 'Chair', year: '2021', description: 'Red', price: '5' });
        doc.querySelectorAll('.buyBtn').forEach((b) => b.click());
        expect(doc.querySelectorAll('#furniture-list tr')).to.have.length(0);
        expect(doc.querySelector('.total-price').textContent).to.equal('15.25');
    });
});
