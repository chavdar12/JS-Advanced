function toggle() {
    const button = document.querySelector('.head .button');
    const extra = document.getElementById('extra');
    const isHidden = button.textContent === 'More';
    extra.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More';
}
