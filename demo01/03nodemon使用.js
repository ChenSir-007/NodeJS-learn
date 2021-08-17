const http = require('http');
const url = require('url');

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('您好 this is nodejs');
    // console.log(request.url);
    if(request.url != '/favicon.ico'){
        const userInfo = url.parse(request.url,true).query;
        // console.log(userInfo);
        console.log(`姓名:${userInfo.name}--年龄:${userInfo.age}`);
    }
    //结束响应
    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');