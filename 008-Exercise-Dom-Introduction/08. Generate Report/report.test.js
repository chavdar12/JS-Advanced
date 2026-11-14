const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Generate Report', () => {
    it('outputs only the checked columns as JSON', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.querySelector('input[name=employee]').checked = true;
        doc.querySelector('input[name=salary]').checked = true;
        doc.querySelector('main button').click();
        const report = JSON.parse(doc.getElementById('output').value);
        expect(report).to.have.length(20);
        expect(report[0]).to.deep.equal({ employee: 'Poole, Tracy', salary: '71 670' });
    });
});
