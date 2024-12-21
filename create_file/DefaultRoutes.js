const http = require("http");

// Routes object
const routes = {
    "/": {
        GET: (_req, res) => {
            sendPlainResponse(res, { body: { message: "Welcome to my server!" } });
        },
    },
    "/students": {
        GET: (_req, res) => {
            sendPlainResponse(res, { body: students });
        },
        POST: (req, res) => {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });

            req.on("end", () => {
                const payload = JSON.parse(body);
                students.push(payload);
                sendPlainResponse(res, {
                    body: { message: "Student added successfully", student: payload }
                });
            });
        },
    },
    default: {
        GET: (_req, res) => {
            sendPlainResponse(res, { status: 404, body: { message: "Route not found" } });
        },
    }
};

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
    const { url, method } = req;
    const currentRoute = routes[url] || routes.default;
    const handler = currentRoute[method] || routes.default;  
    
    handler(req, res);

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

// fetch("http://localhost:4000/students", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 3,
//     firstName: "John",
//     lastName: "Doe",
//     age: 20,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));