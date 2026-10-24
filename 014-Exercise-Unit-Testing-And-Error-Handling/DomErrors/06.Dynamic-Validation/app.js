function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', () => {
        input.classList.toggle('error', !/^[a-z]+@[a-z]+\.[a-z]+$/.test(input.value));
    });
}
