const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test-helpers/dom');

describe('Notification', () => {
    it('shows the message and hides it on click', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.querySelector('button').click();
        const notification = doc.getElementById('notification');
        expect(notification.textContent).to.equal('Something happened!');
        expect(notification.style.display).to.equal('block');
        notification.click();
        expect(notification.style.display).to.equal('none');
    });
});
