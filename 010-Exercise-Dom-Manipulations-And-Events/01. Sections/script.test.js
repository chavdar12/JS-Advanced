const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Sections', () => {
    it('creates hidden sections that reveal on click', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const divs = window.document.querySelectorAll('#content div');
        expect(divs).to.have.length(4);
        const p = divs[2].querySelector('p');
        expect(p.textContent).to.equal('Section 3');
        expect(p.style.display).to.equal('none');
        divs[2].click();
        expect(p.style.display).to.equal('');
    });
});
