const http = require('http');
const fs = require('fs');
const url = require('url');

//heroku port - never pushed to heroku
// const PORT = process.env.PORT || 5000;

// set port to 8080 for local
const PORT = process.env.PORT


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
}).listen(PORT);

console.log('Server listening on port 8080...');