function validateRequest(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!methods.includes(request.method)) throw new Error('Invalid request header: Invalid Method');
    if (typeof request.uri !== 'string' || !(request.uri === '*' || /^[\w.]+$/.test(request.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!versions.includes(request.version)) throw new Error('Invalid request header: Invalid Version');
    if (typeof request.message !== 'string' || /[<>\\&'"]/.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return request;
}

module.exports = validateRequest;
