const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');

// Serve only local files, so CDN scripts (jQuery etc.) never hit the network in CI.
class LocalOnlyLoader extends ResourceLoader {
    fetch(url, options) {
        return url.startsWith('file:') ? super.fetch(url, options) : null;
    }
}

// Loads an exercise page with its scripts and resolves with the window once "load" has fired.
// Script errors reject, so a broken solution fails the test instead of only logging.
async function loadPage(htmlPath, { beforeParse } = {}) {
    const errors = [];
    const virtualConsole = new VirtualConsole();
    virtualConsole.on('jsdomError', (e) => errors.push(e));

    const dom = await JSDOM.fromFile(htmlPath, {
        runScripts: 'dangerously',
        resources: new LocalOnlyLoader(),
        pretendToBeVisual: true,
        virtualConsole,
        beforeParse(window) {
            window.alert = () => {};
            if (beforeParse) beforeParse(window);
        },
    });
    const { window } = dom;
    if (window.document.readyState !== 'complete') {
        await new Promise((resolve) => window.addEventListener('load', resolve));
    }
    window.errors = errors;
    if (errors.length) throw errors[0];
    return window;
}

module.exports = { loadPage };
