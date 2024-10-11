let http = require('http');
let URL = require('url');

let server= http.createServer(function(req,res){
    let myURLs = "http://rabbil.com/blog.html?year=2015&month=july";

    let myURL = URL.parse(myURLs,true);
    let myHostName = myURL.hostname;
    let myPathName = myURL.pathname;
    let mySearcher = myURL.search;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(myHostName);
    res.write(myPathName);
    res.write(mySearcher);
    res.write("hello world!");
    res.end();


});

server.listen(8080);

console.log('server Run Success!');