////// the first thing is about creating server:


const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req,res) => {
    const pathName = req.url;
    console.log(pathName)
    
    if (pathName === '/' || pathName === '/overview') {
        res.end('hello from the overview');

    } else if ( pathName === '/category'){
        res.writeHead(404, { 'content-type':'text/html' })
        res.end('hello from the category');

    } else if (pathName === '/API') {
        // fs.readFile(`${__dirname}/DATA/data.json`, 'utf-8', (err, data)  => {
        //     if(err) {
        //         res.writeHead(404, {'content-type':'text/html'});
        //         res.end('Internet is not disponable')
        //     }

            // const productData = JSON.parse(data);
            // res.writeHead(200,{'content-type':'application/json'});
            res.end('data');
            console.log('productData')
        // })

    } else {
        res.writeHead(404, { 
          'content-type':'text/html'
        })
        res.end('<h3>404 NOT FOUND</h3>');
    }
    
})


///// then the second thing is about starting the server:

server.listen(8000, '127.0.0.2', () => {
  console.log('requests are coming from port 8000')
})

