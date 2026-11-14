const { expect } = require('chai');
const ArtGallery = require('./02.artGallery');

describe('ArtGallery', () => {
    let gallery;
    beforeEach(() => {
        gallery = new ArtGallery('Curtis Mayfield');
    });

    it('adds articles case-insensitively and merges quantities', () => {
        expect(gallery.addArticle('picture', 'Mona Liza', 3)).to.equal('Successfully added article Mona Liza with a new quantity- 3.');
        expect(gallery.addArticle('Item', 'Ancient vase', 2)).to.equal('Successfully added article Ancient vase with a new quantity- 2.');
        expect(gallery.addArticle('PICTURE', 'Mona Liza', 1)).to.equal('Successfully added article Mona Liza with a new quantity- 1.');
        expect(gallery.listOfArticles).to.deep.equal([
            { articleModel: 'picture', articleName: 'Mona Liza', quantity: 4 },
            { articleModel: 'item', articleName: 'Ancient vase', quantity: 2 },
        ]);
        expect(() => gallery.addArticle('sculpture', 'X', 1)).to.throw('This article model is not included in this gallery!');
    });

    it('invites guests with points by personality', () => {
        expect(gallery.inviteGuest('John', 'Vip')).to.equal('You have successfully invited John!');
        expect(gallery.inviteGuest('Peter', 'Middle')).to.equal('You have successfully invited Peter!');
        gallery.inviteGuest('Ivan', 'Normal');
        expect(() => gallery.inviteGuest('John', 'Middle')).to.throw('John has already been invited.');
        expect(gallery.guests.map((g) => g.points)).to.deep.equal([500, 250, 50]);
    });

    it('sells articles and reports the gallery', () => {
        gallery.addArticle('picture', 'Mona Liza', 3);
        gallery.addArticle('Item', 'Ancient vase', 2);
        gallery.addArticle('picture', 'Mona Liza', 1);
        gallery.inviteGuest('John', 'Vip');
        gallery.inviteGuest('Peter', 'Middle');
        expect(gallery.buyArticle('picture', 'Mona Liza', 'John')).to.equal('John successfully purchased the article worth 200 points.');
        expect(gallery.buyArticle('item', 'Ancient vase', 'Peter')).to.equal('Peter successfully purchased the article worth 250 points.');
        expect(() => gallery.buyArticle('item', 'Mona Liza', 'John')).to.throw('This article is not found.');
        expect(gallery.showGalleryInfo('article')).to.equal('Articles information:\npicture - Mona Liza - 3\nitem - Ancient vase - 1');
        expect(gallery.showGalleryInfo('guest')).to.equal('Guests information:\nJohn - 1\nPeter - 1');
    });

    it('handles unavailable articles, unknown guests and missing points', () => {
        gallery.addArticle('item', 'Vase', 1);
        gallery.inviteGuest('Poor', 'Normal');
        expect(gallery.buyArticle('item', 'Vase', 'Ghost')).to.equal('This guest is not invited.');
        expect(gallery.buyArticle('item', 'Vase', 'Poor')).to.equal('You need to more points to purchase the article.');
        gallery.inviteGuest('Rich', 'Vip');
        gallery.buyArticle('item', 'Vase', 'Rich');
        expect(gallery.buyArticle('item', 'Vase', 'Rich')).to.equal('The Vase is not available.');
    });
});
