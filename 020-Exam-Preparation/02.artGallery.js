const POINTS_BY_PERSONALITY = { Vip: 500, Middle: 250 };
const DEFAULT_POINTS = 50;

class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        const model = articleModel.toLowerCase();
        if (!(model in this.possibleArticles)) {
            throw new Error('This article model is not included in this gallery!');
        }
        const existing = this.listOfArticles.find((a) => a.articleName === articleName && a.articleModel === model);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel: model, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some((g) => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }
        const points = POINTS_BY_PERSONALITY[personality] ?? DEFAULT_POINTS;
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const article = this.listOfArticles.find((a) => a.articleName === articleName && a.articleModel === articleModel);
        if (!article) {
            throw new Error('This article is not found.');
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        const guest = this.guests.find((g) => g.guestName === guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }
        const price = this.possibleArticles[articleModel];
        if (guest.points < price) {
            return 'You need to more points to purchase the article.';
        }
        guest.points -= price;
        guest.purchaseArticle += 1;
        article.quantity -= 1;
        return `${guestName} successfully purchased the article worth ${price} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            return ['Articles information:',
                ...this.listOfArticles.map((a) => `${a.articleModel} - ${a.articleName} - ${a.quantity}`)].join('\n');
        }
        return ['Guests information:',
            ...this.guests.map((g) => `${g.guestName} - ${g.purchaseArticle}`)].join('\n');
    }
}

module.exports = ArtGallery;
