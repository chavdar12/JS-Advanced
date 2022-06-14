function extractText() {
    let items = document.getElementById("items");

    let textContent = document.querySelectorAll("#items li");
    let textArea = document.getElementById("result");

    for (let element of textContent) {
        textArea.value += element.textContent + "\n";
    }
}
