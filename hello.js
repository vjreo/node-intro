const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function(req, res) {
    const q = url.parse(req.url, true);
    let filename = '.' + q.pathname;
    if (filename == './') {filename = './index';}

    filename = filename + '.html';

    fs.readFile(filename, function(err, data) { 
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
     });
}).listen(8080);

console.log('Server listening on port 8080...');