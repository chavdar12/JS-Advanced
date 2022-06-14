function extract(content) {
    let text = document.getElementById(content).textContent;
    let result = '';

    let regex = /\((.+?)\)/g;

    let matcher = regex.exec(text);

    while (matcher != null) {

        result += matcher[1];
        result += '; ';

        matcher = regex.exec(text);
    }

    return result;
}
