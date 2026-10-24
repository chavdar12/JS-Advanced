function notify(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.onclick = () => { notification.style.display = 'none'; };
}
