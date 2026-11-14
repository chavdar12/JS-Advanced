const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Distance Converter', () => {
    it('converts between units via meters', async () => {
        const window = await loadPage(path.join(__dirname, 'converter.html'));
        const doc = window.document;
        doc.getElementById('inputDistance').value = '1';
        doc.getElementById('inputUnits').value = 'km';
        doc.getElementById('outputUnits').value = 'ft';
        doc.getElementById('convert').click();
        expect(Number(doc.getElementById('outputDistance').value)).to.be.closeTo(3280.8399, 1e-4);
    });
});
