const url_re = /\%20/;

function parseURL(url) {
    return url.replace(url_re, ' ');
}

module.exports = {
    parseURL
}