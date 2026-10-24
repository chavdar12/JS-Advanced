const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Extract Parenthesis', () => {
    it('returns the text inside parentheses joined by "; "', async () => {
        const window = await loadPage(path.join(__dirname, 'tamplate.html'));
        expect(window.extract('content')).to.equal('Bulgaria; Kazanlak; Rosa damascena Mill');
    });
});
