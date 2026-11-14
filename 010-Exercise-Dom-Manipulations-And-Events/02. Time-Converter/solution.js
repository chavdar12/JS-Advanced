function attachEventsListeners() {
    const secondsPer = { days: 86400, hours: 3600, minutes: 60, seconds: 1 };

    for (const unit of Object.keys(secondsPer)) {
        document.getElementById(`${unit}Btn`).addEventListener('click', () => {
            const seconds = Number(document.getElementById(unit).value) * secondsPer[unit];
            for (const [other, factor] of Object.entries(secondsPer)) {
                document.getElementById(other).value = seconds / factor;
            }
        });
    }
}
