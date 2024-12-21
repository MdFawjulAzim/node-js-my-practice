const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({msg:"Welcome to my server"}));
        res.end();
    }else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({msg:"Page not found"}));
    }
    res.end();
});
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
