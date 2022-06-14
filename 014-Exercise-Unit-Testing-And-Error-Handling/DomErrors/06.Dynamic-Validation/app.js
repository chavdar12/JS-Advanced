function validate() {
    const emailRegex = /^([a-z]+@[a-z]+.[a-z]+)$/;

    const inputField = document.getElementById('email');

    inputField.addEventListener('change', onChange);

    function onChange(event) {
        if (!emailRegex.test(event.target.value)) {
            event.target.classList.add('error')
        } else {
            event.target.classList.remove('error');
        }
    }
}
