function solve() {
    const [, openSection, , completeSection] = document.querySelectorAll('.wrapper section');
    const open = openSection.querySelectorAll('div')[1];
    const inProgress = document.getElementById('in-progress');
    const complete = completeSection.querySelectorAll('div')[1];
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        if (!task.value.trim() || !description.value.trim() || !date.value.trim()) return;

        const article = document.createElement('article');
        article.innerHTML = '<h3></h3><p></p><p></p><div class="flex"></div>';
        article.querySelector('h3').textContent = task.value;
        const [descP, dateP] = article.querySelectorAll('p');
        descP.textContent = `Description: ${description.value}`;
        dateP.textContent = `Due Date: ${date.value}`;

        const buttons = article.querySelector('.flex');
        const start = button('green', 'Start', () => {
            inProgress.appendChild(article);
            start.remove();
            buttons.appendChild(button('orange', 'Finish', () => {
                buttons.remove();
                complete.appendChild(article);
            }));
        });
        buttons.append(start, button('red', 'Delete', () => article.remove()));
        open.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';
    });

    function button(className, text, onClick) {
        const b = document.createElement('button');
        b.className = className;
        b.textContent = text;
        b.addEventListener('click', onClick);
        return b;
    }
}
