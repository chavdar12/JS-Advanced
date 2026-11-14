const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Travel Agency', () => {
    let doc;
    const fill = (values) => Object.entries(values).forEach(([id, v]) => { doc.getElementById(id).value = v; });

    beforeEach(async () => {
        doc = (await loadPage(path.join(__dirname, 'index.html'))).document;
    });

    it('requires full name and email', () => {
        fill({ fname: 'Ivan', email: '' });
        doc.getElementById('submitBTN').click();
        expect(doc.querySelectorAll('#infoPreview li')).to.have.length(0);
    });

    it('submits, edits and continues', () => {
        fill({ fname: 'Ivan Ivanov', email: 'ivan@abv.bg', phone: '0888', address: 'Sofia', code: '1000' });
        doc.getElementById('submitBTN').click();

        const items = [...doc.querySelectorAll('#infoPreview li')].map((li) => li.textContent);
        expect(items).to.deep.equal([
            'Full Name: Ivan Ivanov', 'Email: ivan@abv.bg', 'Phone Number: 0888', 'Address: Sofia', 'Postal Code: 1000',
        ]);
        expect(doc.getElementById('fname').value).to.equal('');
        expect(doc.getElementById('submitBTN').disabled).to.equal(true);
        expect(doc.getElementById('editBTN').disabled).to.equal(false);

        doc.getElementById('editBTN').click();
        expect(doc.getElementById('fname').value).to.equal('Ivan Ivanov');
        expect(doc.querySelectorAll('#infoPreview li')).to.have.length(0);
        expect(doc.getElementById('continueBTN').disabled).to.equal(true);

        doc.getElementById('submitBTN').click();
        doc.getElementById('continueBTN').click();
        const block = doc.getElementById('block');
        expect(block.children).to.have.length(1);
        expect(block.innerHTML).to.equal('<h3>Thank you for your reservation!</h3>');
    });
});
