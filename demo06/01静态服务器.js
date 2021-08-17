const http = require('http');
const fs = require('fs');
const common = require('./module/common');
const path = require('path');
const url = require('url');

http.createServer((request,response)=>{
    //获取地址
    let pathname = url.parse(request.url).pathname;
    pathname = pathname==='/'?'/index.html':pathname;
    //获取后缀名
    let extname = path.extname(pathname);
    //通过fs模块读取文件
    if(pathname!='/favicon.ico'){
        fs.readFile('./static'+pathname,(err,data)=>{
            if(err){
                response.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
                response.end('这个页面不存在');
                return;
            }
            let mine = common.getFileMime(extname);
            response.writeHead(200,{'Content-Type':''+mine+';charset="utf-8"'});
            response.end(data);
        })
    }
}).listen(3000);

console.log('Server running at http:127.0.1:3000/');