function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const field = document.getElementById('searchField');
        const text = field.value.toLowerCase();
        document.querySelectorAll('tbody tr').forEach((row) => {
            const isMatch = text !== '' && row.textContent.toLowerCase().includes(text);
            row.classList.toggle('select', isMatch);
        });
        field.value = '';
    }
}
