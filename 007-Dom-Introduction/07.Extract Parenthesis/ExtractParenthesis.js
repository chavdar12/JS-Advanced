function extract(content) {
    const text = document.getElementById(content).textContent;
    return Array.from(text.matchAll(/\(([^)]+)\)/g), (m) => m[1]).join('; ');
}
