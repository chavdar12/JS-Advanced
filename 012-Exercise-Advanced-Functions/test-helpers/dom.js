const { JSDOM, VirtualConsole, requestInterceptor } = require('jsdom');

// Serve only local files, so CDN scripts (jQuery etc.) never hit the network in CI.
// Remote scripts/styles are answered with an empty body, like the old loader skipping them.
const localOnly = requestInterceptor((request) => {
    if (request.url.startsWith('file:')) return undefined;
    const type = new URL(request.url).pathname.endsWith('.css') ? 'text/css' : 'text/javascript';
    return new Response('', { headers: { 'Content-Type': type } });
});

// Loads an exercise page with its scripts and resolves with the window once "load" has fired.
// Script errors reject, so a broken solution fails the test instead of only logging.
async function loadPage(htmlPath, { beforeParse } = {}) {
    const errors = [];
    const virtualConsole = new VirtualConsole();
    virtualConsole.on('jsdomError', (e) => errors.push(e));

    const dom = await JSDOM.fromFile(htmlPath, {
        runScripts: 'dangerously',
        resources: { interceptors: [localOnly] },
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
