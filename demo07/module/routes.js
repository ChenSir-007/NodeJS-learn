const fs=require('fs');
const path = require('path');
const url = require('url');

exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';

    }

}

function getFileMime(extname) {

    var data=fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj=JSON.parse(data.toString());
    return mimeObj[extname];

}

exports.static = function (request,response,staticPath) {

    //获取地址
    let pathname = url.parse(request.url).pathname;
    pathname = pathname==='/'?'/index.html':pathname;
    //获取后缀名
    let extname = path.extname(pathname);
    //通过fs模块读取文件
    if(pathname!='/favicon.ico'){
        fs.readFile('./'+staticPath+pathname,(err,data)=>{
            if(err){
                response.writeHead(404,{'Content-Type':'text/html;charset="utf-8"'});
                response.end('这个页面不存在');
                return;
            }
            let mine = getFileMime(extname);
            response.writeHead(200,{'Content-Type':''+mine+';charset="utf-8"'});
            response.end(data);
        })
    }

}



