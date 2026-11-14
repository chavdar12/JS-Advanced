function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    document.getElementById('menu').add(new Option(text.value, value.value));
    text.value = '';
    value.value = '';
}
