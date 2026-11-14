function solve() {
    const sentences = document.getElementById('input').value
        .split('.')
        .map((s) => s.trim())
        .filter(Boolean);
    const output = document.getElementById('output');
    output.innerHTML = '';
    for (let i = 0; i < sentences.length; i += 3) {
        const p = document.createElement('p');
        p.textContent = sentences.slice(i, i + 3).map((s) => `${s}.`).join(' ');
        output.appendChild(p);
    }
}
