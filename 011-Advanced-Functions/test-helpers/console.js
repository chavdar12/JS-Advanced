const util = require('util');

// Runs fn and returns what it printed with console.log, one entry per call.
function captureLog(fn) {
    const lines = [];
    const original = console.log;
    console.log = (...args) => lines.push(util.format(...args));
    try {
        fn();
    } finally {
        console.log = original;
    }
    return lines;
}

module.exports = { captureLog };
