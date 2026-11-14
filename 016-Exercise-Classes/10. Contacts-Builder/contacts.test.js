const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('10. Contacts Builder', () => {
    it('renders a hidden info box that the button toggles', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const articles = window.document.querySelectorAll('#main article');
        expect(articles).to.have.length(3);

        const [title, info] = articles[0].children;
        expect(title.className).to.equal('title');
        expect(title.firstChild.textContent).to.equal('Ivan Ivanov');
        expect(Array.from(info.children, (s) => s.textContent))
            .to.deep.equal(['☎ 0888 123 456', '✉ i.ivanov@gmail.com']);
        expect(info.style.display).to.equal('none');

        title.querySelector('button').click();
        expect(info.style.display).to.equal('block');
        title.querySelector('button').click();
        expect(info.style.display).to.equal('none');
    });

    it('toggles the "online" class with the online property', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const contact = window.eval('contacts[0]');
        const title = window.document.querySelector('#main .title');
        expect(contact.online).to.equal(false);
        contact.online = true;
        expect(title.classList.contains('online')).to.equal(true);
        contact.online = false;
        expect(title.classList.contains('online')).to.equal(false);
    });
});
