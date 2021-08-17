const http = require('http');
const routes = require('./module/routes');

http.createServer((request,response)=>{
    routes.static(request,response,'static');
}).listen(3000);

console.log('Server running at http:127.0.1:3000/');