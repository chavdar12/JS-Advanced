function getArticleGenerator(articles) {
    const remaining = articles.slice();
    return function () {
        if (remaining.length === 0) return;
        const article = document.createElement('article');
        article.textContent = remaining.shift();
        document.getElementById('content').appendChild(article);
    };
}
