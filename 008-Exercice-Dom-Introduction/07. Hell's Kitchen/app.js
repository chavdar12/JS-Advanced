function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const input = JSON.parse(document.querySelector('#inputs textarea').value);
        const restaurants = {};

        for (const line of input) {
            const [name, workersText] = line.split(' - ');
            restaurants[name] = restaurants[name] || [];
            for (const entry of workersText.split(', ')) {
                const [worker, salary] = entry.split(' ');
                restaurants[name].push({ worker, salary: Number(salary) });
            }
        }

        const average = (workers) => workers.reduce((s, w) => s + w.salary, 0) / workers.length;
        // Ties keep the first restaurant entered.
        const [bestName, bestWorkers] = Object.entries(restaurants)
            .reduce((best, cur) => (average(cur[1]) > average(best[1]) ? cur : best));
        bestWorkers.sort((a, b) => b.salary - a.salary);

        document.querySelector('#bestRestaurant p').textContent =
            `Name: ${bestName} Average Salary: ${average(bestWorkers).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
        document.querySelector('#workers p').textContent =
            bestWorkers.map((w) => `Name: ${w.worker} With Salary: ${w.salary}`).join(' ');
    }
}
