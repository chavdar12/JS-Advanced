const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Search in List', () => {
    it('highlights matches and counts them, resetting old ones', async () => {
        const window = await loadPage(path.join(__dirname, 'list.html'));
        const doc = window.document;
        const search = (text) => {
            doc.getElementById('searchText').value = text;
            doc.querySelector('button').click();
        };
        const bold = () => Array.from(doc.querySelectorAll('#towns li'))
            .filter((li) => li.style.fontWeight === 'bold' && li.style.textDecoration === 'underline')
            .map((li) => li.textContent);

        search('Bania');
        expect(bold()).to.deep.equal(['Dolna Bania', 'Gorna Bania']);
        expect(doc.getElementById('result').textContent).to.equal('2 matches found');

        search('Pl');
        expect(bold()).to.deep.equal(['Pleven', 'Plovdiv']);
    });
});
