const http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('你好 this is nodejs');
    //结束响应
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');