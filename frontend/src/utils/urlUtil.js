// http://medialize.github.io/URI.js/docs.html
import URI from 'urijs';

const createUri = (urlPath, queryParameters = []) => {
    const uri = URI(SERVER_ADDRESS).path(urlPath);

    for (let queryParameterPair of queryParameters) {
        uri.addQuery(queryParameterPair.key, queryParameterPair.value);
    }

    return uri;
}

const createUriWithMultipleUrlPaths = (urlPaths, queryParameters = []) => {
    const uri = new URI(SERVER_ADDRESS).path(URI.joinPaths(...urlPaths).toString());

    for (let queryParameterPair of queryParameters) {
        uri.addQuery(queryParameterPair.key, queryParameterPair.value);
    }

    return uri;
}

export { createUri, createUriWithMultipleUrlPaths };
