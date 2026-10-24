function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (e) => {
        const percent = Math.floor((e.offsetX / gradient.clientWidth) * 100);
        document.getElementById('result').textContent = `${percent}%`;
    });
}
