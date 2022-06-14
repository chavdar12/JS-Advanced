function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let relations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    document.getElementById('daysBtn').addEventListener('click',);
    document.getElementById('hoursBtn').addEventListener('click',);
    document.getElementById('minutesBtn').addEventListener('click',);
    document.getElementById('secondsBtn').addEventListener('click',);

    function onConvert(e){
        let input = e.target.parentElement;
    }
}
