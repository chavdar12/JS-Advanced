function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);


    function onClick() {
        let items = document.querySelectorAll('table tr');
        document.getElementById("searchField").value;
        items = Array.from(items);


        for (let i = 2; i < items.length; i++) {
            let currentItem = items[i].textContent;

            console.log(currentItem.split("\n"));
        }
    }
}
