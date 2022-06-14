function toggle() {
    let button = document.querySelector(".button");
    let text = document.getElementById("extra");

    button.textContent = button.textContent === "More" ? "Less" : "More";

    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}
