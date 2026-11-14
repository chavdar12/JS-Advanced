function encodeAndDecodeMessages() {
    const [input, output] = document.querySelectorAll('#main textarea');
    const [encodeBtn, decodeBtn] = document.querySelectorAll('#main button');
    const shift = (text, by) => Array.from(text, (c) => String.fromCharCode(c.charCodeAt(0) + by)).join('');

    encodeBtn.addEventListener('click', () => {
        output.value = shift(input.value, 1);
        input.value = '';
    });
    decodeBtn.addEventListener('click', () => {
        output.value = shift(output.value, -1);
    });
}
