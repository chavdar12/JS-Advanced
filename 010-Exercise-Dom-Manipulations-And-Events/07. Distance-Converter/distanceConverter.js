function attachEventsListeners() {
    const meters = { km: 1000, m: 1, cm: 0.01, mm: 0.001, mi: 1609.34, yrd: 0.9144, ft: 0.3048, in: 0.0254 };

    document.getElementById('convert').addEventListener('click', () => {
        const distance = Number(document.getElementById('inputDistance').value);
        const from = document.getElementById('inputUnits').value;
        const to = document.getElementById('outputUnits').value;
        document.getElementById('outputDistance').value = (distance * meters[from]) / meters[to];
    });
}
