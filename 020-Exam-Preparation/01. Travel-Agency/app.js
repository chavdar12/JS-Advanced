window.addEventListener('load', solve);

const FIELDS = [
    ['fname', 'Full Name'],
    ['email', 'Email'],
    ['phone', 'Phone Number'],
    ['address', 'Address'],
    ['code', 'Postal Code'],
];

function solve() {
    const inputs = FIELDS.map(([id]) => document.getElementById(id));
    const preview = document.getElementById('infoPreview');
    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');
    let saved = [];

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const [fullName, email] = inputs;
        if (!fullName.value || !email.value) {
            return;
        }
        saved = inputs.map((input) => input.value);
        FIELDS.forEach(([, label], i) => {
            const li = document.createElement('li');
            li.textContent = `${label}: ${saved[i]}`;
            preview.appendChild(li);
        });
        inputs.forEach((input) => { input.value = ''; });
        setButtons(true);
    });

    editBtn.addEventListener('click', () => {
        inputs.forEach((input, i) => { input.value = saved[i]; });
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        setButtons(false);
    });

    continueBtn.addEventListener('click', () => {
        const block = document.getElementById('block');
        block.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.textContent = 'Thank you for your reservation!';
        block.appendChild(h3);
    });

    function setButtons(submitted) {
        submitBtn.disabled = submitted;
        editBtn.disabled = !submitted;
        continueBtn.disabled = !submitted;
    }
}
