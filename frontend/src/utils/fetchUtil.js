import fetch from 'isomorphic-fetch';
import { createUri } from 'utils/urlUtil';

const doFetch = (urlPath, queryParameters = [], fetchOptions = null) => {
    return fetch(createUri(urlPath, queryParameters), fetchOptions);
};

export { doFetch };
