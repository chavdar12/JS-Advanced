const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Time Converter', () => {
    it('fills every unit from the converted one', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.getElementById('hours').value = '48';
        doc.getElementById('hoursBtn').click();
        const values = ['days', 'hours', 'minutes', 'seconds'].map((id) => doc.getElementById(id).value);
        expect(values).to.deep.equal(['2', '48', '2880', '172800']);
    });
});
