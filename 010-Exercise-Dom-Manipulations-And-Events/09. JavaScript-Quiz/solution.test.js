const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe('JavaScript Quiz', () => {
    async function play(answerIndexes) {
        const window = await loadPage(path.join(__dirname, 'template.html'));
        const doc = window.document;
        const sections = doc.querySelectorAll('#quizzie section');
        answerIndexes.forEach((a, i) => sections[i].querySelectorAll('.answer-text')[a].click());
        return doc;
    }

    it('recognizes a perfect score', async () => {
        const doc = await play([0, 1, 0]);
        expect(doc.getElementById('results').style.display).to.equal('block');
        expect(doc.querySelector('#results h1').textContent).to.equal('You are recognized as top JavaScript fan!');
    });

    it('counts right answers and moves through sections', async () => {
        const doc = await play([1, 1, 1]);
        expect(doc.querySelector('#results h1').textContent).to.equal('You have 1 right answers');
        expect(doc.querySelectorAll('#quizzie section.hidden')).to.have.length(3);
    });
});
