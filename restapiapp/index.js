let http = require('http');
let url = require('url');

let server = http.createServer(function(req, res) {
    let parsedUrl = url.parse(req.url, true);

    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    res.end('Hello World\n');

    console.log(trimmedPath);
});

server.listen(3000, function() {
    console.log('Listening on 3000');
})