function editElement(element, match, replacer) {
    const text = element.textContent;

    element.textContent = text.replaceAll(match, replacer);
}
