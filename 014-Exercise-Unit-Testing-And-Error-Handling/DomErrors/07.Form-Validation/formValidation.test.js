const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../../test/dom');

describe('Form Validation', () => {
    async function setup() {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const fill = (values) => {
            for (const [id, v] of Object.entries(values)) doc.getElementById(id).value = v;
            doc.getElementById('submit').click();
        };
        return { window, doc, fill };
    }
    const valid = {
        username: 'Peter123', email: 'peter@abv.bg', password: 'secret_1', 'confirm-password': 'secret_1',
    };

    it('shows Valid when all fields are valid', async () => {
        const { doc, fill } = await setup();
        fill(valid);
        expect(doc.getElementById('valid').style.display).to.equal('block');
    });

    it('marks every invalid field red', async () => {
        const { doc, fill } = await setup();
        fill({ username: 'ab', email: 'no-at.bg', password: 'secret_1', 'confirm-password': 'other_11' });
        expect(doc.getElementById('valid').style.display).to.equal('none');
        for (const id of ['username', 'email', 'password', 'confirm-password']) {
            expect(doc.getElementById(id).style.borderColor, id).to.equal('red');
        }
    });

    it('validates the company number only when company is checked', async () => {
        const { window, doc, fill } = await setup();
        const company = doc.getElementById('company');
        company.checked = true;
        company.dispatchEvent(new window.Event('change'));
        expect(doc.getElementById('companyInfo').style.display).to.equal('block');

        fill({ ...valid, companyNumber: '999' });
        expect(doc.getElementById('companyNumber').style.borderColor).to.equal('red');
        expect(doc.getElementById('valid').style.display).to.equal('none');

        fill({ companyNumber: '1234' });
        expect(doc.getElementById('valid').style.display).to.equal('block');
    });
});
