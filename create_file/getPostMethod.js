const http = require("http");

const students = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 20
    },
    {
        id: 2,
        firstName: "Shahin",
        lastName: "Doe",
        age: 22
    }
];

const sendPlainResponse = (res, {
    contentType = 'application/json',
    status = 200,
    body = {}
}) => {
    res.writeHead(status, { 'Content-Type': contentType });
    res.write(JSON.stringify(body));
    res.end();
};

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method.toLowerCase() === 'get') {
        sendPlainResponse(res, {
            body: { message: 'Welcome to my server' }
        });
    } else if (req.url === '/students' && req.method.toLowerCase() === 'get') {
        sendPlainResponse(res, {
            body: students
        });
    } else if (req.url === '/students' && req.method.toLowerCase() === 'post') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            console.log('Data:', body);
            sendPlainResponse(res, {
                body: { message: body }
            });
        });
    } else {
        sendPlainResponse(res, {
            status: 404,
            body: { message: 'Page not found' }
        });
    }
    // **res.end();** - এটি সরিয়ে ফেলেছি
});

server.listen(4000, () => {
    console.log("Server is running on port 4000");
});




// fetch("http://localhost:4000/students", {
//     method: 'POST',
//     body: "Some random text"
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(e => console.log(e));