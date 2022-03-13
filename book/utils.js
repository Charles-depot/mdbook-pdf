// prefix = "/github-repo"
if (typeof prefix == "undefined") {
    prefix = "/mdbook-pdf"
}

function url(relative) {
    return prefix + "/web/viewer.html?file=" + encodeURI(prefix) + "%2F" + relative;
}
