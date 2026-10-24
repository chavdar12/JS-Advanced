function solve() {
    const [nameInput, hallInput, priceInput] = document.querySelectorAll('#container input');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');

    document.querySelector('#container button').addEventListener('click', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const hall = hallInput.value.trim();
        const price = Number(priceInput.value);
        if (!name || !hall || priceInput.value.trim() === '' || Number.isNaN(price)) return;

        const li = document.createElement('li');
        li.innerHTML = '<span></span><strong></strong><div><strong></strong>'
            + '<input placeholder="Tickets Sold"><button>Archive</button></div>';
        li.querySelector('span').textContent = name;
        li.querySelector('strong').textContent = `Hall: ${hall}`;
        li.querySelector('div strong').textContent = price.toFixed(2);
        li.querySelector('button').addEventListener('click', () => archive(li, name, price));
        moviesList.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
    });

    function archive(li, name, price) {
        const ticketsInput = li.querySelector('input');
        const tickets = Number(ticketsInput.value);
        if (ticketsInput.value.trim() === '' || Number.isNaN(tickets)) return;

        const archived = document.createElement('li');
        archived.innerHTML = '<span></span><strong></strong><button>Delete</button>';
        archived.querySelector('span').textContent = name;
        archived.querySelector('strong').textContent = `Total amount: ${(price * tickets).toFixed(2)}`;
        archived.querySelector('button').addEventListener('click', () => archived.remove());
        archiveList.appendChild(archived);
        li.remove();
    }

    document.querySelector('#archive > button').addEventListener('click', () => {
        archiveList.innerHTML = '';
    });
}
