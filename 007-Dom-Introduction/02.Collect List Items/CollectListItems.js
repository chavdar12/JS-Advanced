function extractText() {
    const items = Array.from(document.querySelectorAll('#items li'));
    document.getElementById('result').value = items.map((li) => li.textContent).join('\n');
}
