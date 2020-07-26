const getParams = function (url) {
    let params = {};
    let parser = document.createElement('a');
    parser.href = url;
    let query = parser.search.substring(1);
    let vars = query.split('&');
    for (let index = 0; index < vars.length; index++) {        
        let pair = vars[index].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}