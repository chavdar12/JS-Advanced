function wordsUppercase(text) {
    console.log((text.match(/\w+/g) || []).map((w) => w.toUpperCase()).join(', '));
}

module.exports = wordsUppercase;
