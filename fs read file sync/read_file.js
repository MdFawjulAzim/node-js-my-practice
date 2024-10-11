let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res) {

    if(req.url == '/') {
        // Async file read
        fs.readFile('home.html', function(err, data) {
            // if (err) {
            //     res.writeHead(404, {'Content-Type': 'text/plain'});
            //     res.write('File not found');
            // } else {
                res.writeHead(200, {'Content-Type': 'text/html'}); // Changed to 'text/html' since you're serving an HTML file
                res.write(data);
            // }
            res.end();
        });
    }

});

server.listen(4040);
console.log('Server is running on port 4040!');
