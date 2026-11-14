class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._title = document.createElement('div');
        this._title.className = 'title';
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this._title.classList.toggle('online', value);
    }

    render(id) {
        const article = document.createElement('article');
        const button = document.createElement('button');
        button.textContent = 'ℹ';
        this._title.textContent = `${this.firstName} ${this.lastName}`;
        this._title.appendChild(button);

        const info = document.createElement('div');
        info.className = 'info';
        info.style.display = 'none';
        for (const text of [`☎ ${this.phone}`, `✉ ${this.email}`]) {
            const span = document.createElement('span');
            span.textContent = text;
            info.appendChild(span);
        }

        button.addEventListener('click', () => {
            info.style.display = info.style.display === 'none' ? 'block' : 'none';
        });

        article.appendChild(this._title);
        article.appendChild(info);
        document.getElementById(id).appendChild(article);
    }
}
