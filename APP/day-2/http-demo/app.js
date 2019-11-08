const http = require('http');
const { users, products } = require('./data');

// Route informataion
// http://localhost:3000
// http://localhost:3000/api/users
// http://localhost:3000/api/products


const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/api/users':

            if (req.method === 'GET') {
                console.log('Request', req);
                res.writeHead(200, { 'content-type': 'application/json' });
                res.write(JSON.stringify(users));
                res.end();
            }
            if (req.method === 'POST') {
                console.log('Request', req);
                res.writeHead(201, { 'content-type': 'application/json' });
                res.write('User created successfully');
                res.end();
            }

            break;
        case '/api/products':
            console.log('Request', req);
            // res.writeHead(200, { 'content-type': 'application/json' });
            res.setHeader('content-type', 'application/json');
            res.write(JSON.stringify(products));
            res.end();
            break;
        default:
            console.log('Request', req);
            res.write('<h1>Welcome to API route.</h1>');
            res.end();
            break;
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`API server started. listening to port ${port}`)
})