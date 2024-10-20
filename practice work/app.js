let http = require('http');

let server= http.createServer(function(req,res){
    res.end("Hello World my friend and my best friend  okay okay okay I Love you !");
});

server.listen(8080);

console.log('server Run Success!');

//Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
