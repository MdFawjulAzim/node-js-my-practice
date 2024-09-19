var http = require('http');


var server =http.createServer(function(req,res){
    res.end("Hello World!");
});

server.listen(8080);
console.log('server Run Success!');