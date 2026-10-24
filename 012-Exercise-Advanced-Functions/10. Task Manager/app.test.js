const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../../test/dom');

describe('Task Manager', () => {
    it('moves a task Open -> In Progress -> Complete', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        const sections = doc.querySelectorAll('.wrapper section');
        const column = (i) => sections[i].querySelectorAll('div')[1];

        doc.getElementById('add').click();
        expect(column(1).children).to.have.length(0);

        doc.getElementById('task').value = 'Exam';
        doc.getElementById('description').value = 'Pass it';
        doc.getElementById('date').value = '2020.04.14';
        doc.getElementById('add').click();
        const article = column(1).querySelector('article');
        expect(article.querySelector('h3').textContent).to.equal('Exam');
        expect(Array.from(article.querySelectorAll('p'), (p) => p.textContent))
            .to.deep.equal(['Description: Pass it', 'Due Date: 2020.04.14']);

        article.querySelector('button.green').click();
        expect(article.parentElement.id).to.equal('in-progress');
        expect(Array.from(article.querySelectorAll('button'), (b) => b.textContent)).to.deep.equal(['Delete', 'Finish']);

        article.querySelector('button.orange').click();
        expect(article.parentElement).to.equal(column(3));
        expect(article.querySelector('.flex')).to.equal(null);
    });

    it('deletes a task', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.getElementById('task').value = 'T';
        doc.getElementById('description').value = 'D';
        doc.getElementById('date').value = '1';
        doc.getElementById('add').click();
        doc.querySelector('article button.red').click();
        expect(doc.querySelectorAll('article')).to.have.length(0);
    });
});
