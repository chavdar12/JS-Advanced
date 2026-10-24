function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const row = Array.from(document.querySelectorAll('#customers tbody tr'))
        .find((tr) => tr.children[1].textContent === email);
    if (row) row.remove();
    document.getElementById('result').textContent = row ? 'Deleted.' : 'Not found.';
}
