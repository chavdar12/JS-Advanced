function search() {
    const text = document.getElementById('searchText').value;
    let matches = 0;
    document.querySelectorAll('#towns li').forEach((li) => {
        const isMatch = text !== '' && li.textContent.includes(text);
        li.style.fontWeight = isMatch ? 'bold' : '';
        li.style.textDecoration = isMatch ? 'underline' : '';
        if (isMatch) matches++;
    });
    document.getElementById('result').textContent = `${matches} matches found`;
}
