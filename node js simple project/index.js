let fs = require('fs');
let http = require('http');

let server = http.createServer((req, res) => {
   
    if(req.url == "/") {
        let data = fs.readFileSync('home.html', 'utf8'); 
        res.end(data);  
    }

    else if(req.url == "/Contact") {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);  
    }

    else if(req.url == "/About") {
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data); 
    }

});


server.listen(8008);
console.log("Server running successfully on port 8080");
