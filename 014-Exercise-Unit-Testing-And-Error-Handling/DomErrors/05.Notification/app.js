function notify(message) {
    const notificationDiv = document.getElementById('notification');

    notificationDiv.textContent = message;

    notificationDiv.style.display = 'block';

    notificationDiv.addEventListener('click', onClick);

    function onClick(ev) {
        ev.target.style.display = 'none';
    }
}
