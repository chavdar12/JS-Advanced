function requestValidator(obj) {

    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /^([\w.]+)$/;
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /([<>\\&'"])/;

    let isValidMethod = false;
    let isValidUri = false;
    let isValidVersion = false;
    let isValidMessage = false;


    //Check for method

    if (methods.includes(obj.method) && obj.method) {
        isValidMethod = true;
    } else {
        throw new Error('Invalid request header: Invalid Method')
    }

    // Check for URI

    if (obj.uri && uriRegex.test(obj.uri)) {
        isValidUri = true;
    } else {
        throw new Error('Invalid request header: Invalid URI')
    }

    // Check for versions

    if (versions.includes(obj.version) && obj.version) {
        isValidVersion = true;
    } else {
        throw new Error('Invalid request header: Invalid Version');
    }

    //Check for message

    if (!obj.message === undefined || !messageRegex.test(obj.message)) {
        isValidMessage = true;
    } else {
        throw new Error('Invalid request header: Invalid Message');
    }

    if (isValidMethod && isValidUri && isValidVersion && isValidMessage) {
        return obj;
    }
}

console.log(requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1'
    }
));
