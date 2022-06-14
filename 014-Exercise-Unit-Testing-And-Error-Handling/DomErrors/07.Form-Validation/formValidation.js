function validate() {
    const usernameRegex = /([a-zA-Z0-9]+)/;
    const passwordRegex = /\w+/;
    const emailRegex = /(\w+@*\.*)/;

    let isValidUsername = false;
    let isValidPassword = false;
    let isValidEmail = false;

    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-Password');


    usernameField.addEventListener('change', onChange)

    function onChange(event) {
        if (usernameRegex.test(usernameField.value) && usernameField.value.length >= 3 && usernameField.value.length <= 20) {
            isValidUsername = true;
        }

        console.log(isValidUsername);
    }


    passwordField.addEventListener('change', onChange);

    function onChange(event) {
        if (passwordRegex.test(passwordField.value) && passwordField.value.length >= 5
            && passwordField.value <= 15 && passwordField.value === confirmPasswordField.value) {
            isValidPassword = true;
        }

        console.log(isValidPassword);
    }


    emailField.addEventListener('change', onChange);

    function onChange(event) {
        let substring = '';
        if (emailField.value.includes('@')) {
            let index = emailField.value.indexOf('@');

            for (let i = index; i < emailField.value.length; i++) {
                substring += emailField.value.substring(index, emailField.value.length - 1);
            }

            if (substring.includes('.')) {
                isValidEmail = true;
            }
        }

        console.log(isValidEmail);
    }
}
