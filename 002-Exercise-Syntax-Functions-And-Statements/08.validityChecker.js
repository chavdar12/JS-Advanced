function validityChecker(x1, y1, x2, y2) {
    const check = (ax, ay, bx, by) => {
        const valid = Number.isInteger(Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2));
        console.log(`{${ax}, ${ay}} to {${bx}, ${by}} is ${valid ? 'valid' : 'invalid'}`);
    };
    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}

module.exports = validityChecker;
