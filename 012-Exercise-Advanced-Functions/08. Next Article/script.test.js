const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Next Article', () => {
    it('shows articles one by one and stops when empty', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const button = doc.querySelector('button');
        for (let i = 0; i < 7; i++) button.click();
        const articles = doc.querySelectorAll('#content article');
        expect(articles).to.have.length(5);
        expect(articles[1].textContent).to.equal('A group of cats is called a clowder.');
    });

    it('does not mutate the input array', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const input = ['a', 'b'];
        window.getArticleGenerator(input)();
        expect(input).to.deep.equal(['a', 'b']);
    });
});
