function lockedProfile() {
    document.querySelectorAll('.profile').forEach((profile) => {
        const button = profile.querySelector('button');
        const hidden = profile.querySelector('div[id$="HiddenFields"]');
        button.addEventListener('click', () => {
            if (!profile.querySelector('input[value="unlock"]').checked) return;
            const show = button.textContent === 'Show more';
            hidden.style.display = show ? 'block' : 'none';
            button.textContent = show ? 'Hide it' : 'Show more';
        });
    });
}
