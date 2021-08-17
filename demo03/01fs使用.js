const fs = require('fs');

// 1.fs.stat 检测是文件还是目录

// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`是文件:${data.isFile()}`);
//     console.log(`是目录:${data.isDirectory()}`);
// })

// fs.mkdir 创建目录

// fs.mkdir('./css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('创建成功');
// })

// 3.fs.writeFile 创建写入文件

// fs.writeFile('./html/index.html','你好nodejs',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('写入成功');
// })

// 4.fs.appendFile 追加文件

// fs.appendFile('./css/base.css','h2{color:green}',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('追加成功');
// })

// 5.fs.readFile 读取文件

// fs.readFile('./html/index.html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('读取成功',data.toString());
// })

// 6.fs.readdir 读取目录

// fs.readdir('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('读取成功',data);
// })

// 7.fs.rename 重命名    功能：1.重命名 2.移动文件

// fs.rename('./css/base.css','./css/index.css',err => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('修改成功');
// })

// 8.fs.rmdir 删除目录

// fs.rmdir('./css',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除成功');
// })

// 9.fs.unlink 删除文件

fs.unlink('./css/index.css',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除文件成功');
})
