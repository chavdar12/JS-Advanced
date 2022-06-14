function search() {
    let items = document.querySelectorAll('#towns li');
    let searchInput = document.getElementById("searchText").value;
    let result = document.getElementById("result");


    let matchesCount = 0;
    for (let town of items) {
        if (town.textContent.match(searchInput)) {
            town.style.fontWeight = "bold";
            town.style.textDecoration = "underline";
            matchesCount++;
            result.textContent = `${matchesCount} matches found`;
        }
    }
}
