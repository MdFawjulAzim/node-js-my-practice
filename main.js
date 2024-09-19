// var http = require('http');


// var server =http.createServer(function(req,res){
//     res.end("Hello World!");
// });

// server.listen(8080);
// console.log('server Run Success!');

var http = require('http');


var server =http.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>This is Home Page</h1>');
        res.end();
    }else if(req.url=="/about"){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<h1>This is about Page</h1>');
        res.end();
    }else if(req.url=="/contact"){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<h1>This is contact Page</h1>');
    res.end();
    }
});

server.listen(8085);
console.log('server Run Success!');