function validate() {
    const field = (id) => document.getElementById(id);
    const company = field('company');
    const companyInfo = field('companyInfo');

    company.addEventListener('change', () => {
        companyInfo.style.display = company.checked ? 'block' : 'none';
    });

    field('submit').addEventListener('click', (e) => {
        e.preventDefault();
        const password = field('password').value;
        const passwordsOk = /^\w{5,15}$/.test(password) && password === field('confirm-password').value;
        const number = Number(field('companyNumber').value);

        const checks = [
            ['username', /^[A-Za-z0-9]{3,20}$/.test(field('username').value)],
            ['email', /^[^@.]+@[^@]*\.[^@]*$/.test(field('email').value)],
            ['password', passwordsOk],
            ['confirm-password', passwordsOk],
        ];
        if (company.checked) checks.push(['companyNumber', number >= 1000 && number <= 9999]);

        for (const [id, ok] of checks) {
            field(id).style.borderColor = ok ? '' : 'red';
        }
        field('valid').style.display = checks.every(([, ok]) => ok) ? 'block' : 'none';
    });
}
