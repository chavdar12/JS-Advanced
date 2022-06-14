function create(input) {
    let parentElement = document.getElementById('content');

    for (const elements of input) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let text = document.createTextNode(elements);

        p.appendChild(text);
        p.style.display = 'none';

        div.appendChild(p);

        div.addEventListener('click', function (e) {
            console.log(e.target.children[0].style.display = 'block');
        });

        parentElement.appendChild(div);
    }
}
