var http = require('http');
http.createServer(function (req, res) {
    console.log('yup')
    res.writeHead(200);
    res.end();
}).listen(8080);