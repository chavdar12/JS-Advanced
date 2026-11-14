window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const list = document.getElementById('furniture-list');
    const total = document.querySelector('.total-price');

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        const yearValue = Number(year.value);
        const priceValue = Number(price.value);
        if (!model.value || !description.value || !(yearValue > 0) || !(priceValue > 0)) {
            return;
        }

        const info = el('tr', { className: 'info' },
            el('td', {}, model.value),
            el('td', {}, priceValue.toFixed(2)),
            el('td', {},
                el('button', { className: 'moreBtn' }, 'More Info'),
                el('button', { className: 'buyBtn' }, 'Buy it')));
        const details = el('tr', { className: 'hide' },
            el('td', {}, `Year: ${yearValue}`),
            el('td', { colSpan: 3 }, `Description: ${description.value}`));
        details.style.display = 'none';

        const [moreBtn, buyBtn] = info.querySelectorAll('button');
        moreBtn.addEventListener('click', () => {
            const showing = moreBtn.textContent === 'Less Info';
            moreBtn.textContent = showing ? 'More Info' : 'Less Info';
            details.style.display = showing ? 'none' : 'contents';
        });
        buyBtn.addEventListener('click', () => {
            total.textContent = (Number(total.textContent) + priceValue).toFixed(2);
            info.remove();
            details.remove();
        });

        list.appendChild(info);
        list.appendChild(details);
        [model, year, description, price].forEach((input) => { input.value = ''; });
    });
}

function el(tag, props, ...children) {
    const element = Object.assign(document.createElement(tag), props);
    children.forEach((child) => element.appendChild(
        typeof child === 'string' ? document.createTextNode(child) : child));
    return element;
}
