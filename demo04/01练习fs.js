// wwwroot文件夹下面有images css js 以及 index.js , 找出wwwroot目录下面的所有目录

const fs = require('fs');
const path = './wwwroot';
var dirArr = [];

fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(data)
    for(let item of data){
        fs.stat(path+'/'+item,(err,data)=>{
            // console.log(data)
            if(data.isDirectory()){
                dirArr.push(item);
            }
        })
    }
})
    // console.log(dirArr);
// a();
setTimeout(()=>console.log(dirArr),0);
// let x = async ()=>{
//     await a();
//     // console.log(dirArr);
//     // setTimeout(()=>console.log(dirArr),1000);
//     // return dirArr;
// };
// x();