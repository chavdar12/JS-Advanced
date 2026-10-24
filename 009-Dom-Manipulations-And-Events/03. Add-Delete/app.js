function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;

    const remove = document.createElement('a');
    remove.href = '#';
    remove.textContent = '[Delete]';
    remove.addEventListener('click', (e) => {
        e.preventDefault();
        li.remove();
    });

    li.appendChild(remove);
    document.getElementById('items').appendChild(li);
    input.value = '';
}
