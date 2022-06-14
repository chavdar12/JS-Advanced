function addItem() {
    let leElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items')

    leElement.textContent = inputElement.value;

    itemsElement.appendChild(leElement);
}
