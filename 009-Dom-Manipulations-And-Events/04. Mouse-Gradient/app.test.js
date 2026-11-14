const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('Mouse Gradient', () => {
    it('shows the hovered position as a percentage', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const gradient = doc.getElementById('gradient');
        Object.defineProperty(gradient, 'clientWidth', { value: 300 }); // jsdom has no layout
        const event = new window.MouseEvent('mousemove');
        Object.defineProperty(event, 'offsetX', { value: 100 });
        gradient.dispatchEvent(event);
        expect(doc.getElementById('result').textContent).to.equal('33%');
    });
});
