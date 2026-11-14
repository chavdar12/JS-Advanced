function solution(command) {
    if (command === 'upvote') {
        this.upvotes++;
        return;
    }
    if (command === 'downvote') {
        this.downvotes++;
        return;
    }

    const { upvotes, downvotes } = this;
    const total = upvotes + downvotes;
    const balance = upvotes - downvotes;
    const inflation = total > 50 ? Math.ceil(Math.max(upvotes, downvotes) * 0.25) : 0;

    let rating = 'new';
    if (total < 10) rating = 'new';
    else if (upvotes / total > 0.66) rating = 'hot';
    else if (balance < 0) rating = 'unpopular';
    else if (total > 100) rating = 'controversial';

    return [upvotes + inflation, downvotes + inflation, balance, rating];
}

module.exports = solution;
