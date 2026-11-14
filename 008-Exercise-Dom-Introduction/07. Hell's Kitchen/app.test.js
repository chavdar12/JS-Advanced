const { expect } = require('chai');
const path = require('path');
const { loadPage } = require('../test-helpers/dom');

describe("Hell's Kitchen", () => {
    it('picks the restaurant with the best average salary', async () => {
        const window = await loadPage(path.join(__dirname, 'index.html'));
        const doc = window.document;
        doc.querySelector('#inputs textarea').value = JSON.stringify([
            'PizzaHut - Peter 500, George 300, Mark 800',
            'TheLake - Bob 1300, Joe 780, Jane 660',
            'PizzaHut - Ann 2000',
        ]);
        doc.getElementById('btnSend').click();
        expect(doc.querySelector('#bestRestaurant p').textContent)
            .to.equal('Name: TheLake Average Salary: 913.33 Best Salary: 1300.00');
        expect(doc.querySelector('#workers p').textContent)
            .to.equal('Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660');
    });
});
