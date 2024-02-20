import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const pathName = req.url;
    console.log(pathName);

    if (pathName === '/' || pathName === '/overview') {
        res.end('hello from the overview');
    } else if (pathName === '/category') {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('hello from the category');
    } else if (pathName === '/API') {
        fs.readFile(path.join(process.cwd(), 'db.json'), 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'content-type': 'text/html' });
                res.end('Internet is not available');
            } else {
                const productData = JSON.parse(data);
                res.writeHead(200, { 'content-type': 'application/json' });
                res.end(data);
                console.log(productData);
            }
        });
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h3>404 NOT FOUND</h3>');
    }
});

server.listen(8000, '127.0.0.2', () => {
    console.log('requests are coming from port 8000');
});
