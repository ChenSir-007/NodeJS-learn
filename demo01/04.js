const http = require('http');
const formatApi = require('./models/tools');

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('您好 this is nodejs');
    const api = formatApi('api/list');
    response.write('<br/>')
    response.write(api);
    //结束响应
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');