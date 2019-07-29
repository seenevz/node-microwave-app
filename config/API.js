class API {
    constructor() {

    }

    static exec() {
        const parts = API.urlParts
        console.log('Executing call with following request => ', parts);

        if (parts[0] == 'api') {
            if (parts[1] == 'user') {
                console.log('insert request handler for =>', parts[2])

            }
        }
    };

    static catchAPIrequest(url) {
        console.log("api check url =>", url)
        url[0] == '/' ? url = url.substring(1, url.lenght) : null;
        if (url.constructor === String) {
            const urlSplit = url.split('/');
            if (urlSplit[0] == 'api') {
                API.urlParts = urlSplit;
                return true
            }
            return false;
        };
    };
};

API.urlParts = null;

module.exports = API;