function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(ev) {

        let profile = ev.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value = "unlock"]').checked;


        let filteredDivs = Array.from(profile.querySelectorAll('div')).filter(d => d.id.includes('HiddenFields'));


        if (isActive) {
            for (let filteredDiv of filteredDivs) {
                if (ev.target.textContent === 'Show more') {
                    ev.target.textContent = 'Hide it';
                    filteredDiv.style.display = 'block';
                } else {
                    ev.target.textContent = 'Show more';
                    filteredDiv.style.display = 'none';
                }
            }
        }
    }
}
