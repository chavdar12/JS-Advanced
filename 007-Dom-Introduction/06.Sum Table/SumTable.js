function sumTable() {
    let table = document.querySelectorAll("table tr");

    let sum = 0;
    let sumArea = document.getElementById("sum");

    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let cost = cols[cols.length - 1].textContent;

        sum += Number(cost);
    }

    sumArea.textContent = sum;
}
