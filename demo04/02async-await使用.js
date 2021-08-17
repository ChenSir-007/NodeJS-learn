// wwwroot文件夹下面有images css js 以及 index.js , 找出wwwroot目录下面的所有目录

const fs = require('fs');

async function isDir(path){
    return new Promise(((resolve, reject) => {
        fs.stat(path,(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            // console.log(data)
            if(data.isDirectory()){
                resolve(true);
            }else resolve(false);
        })
    }))
}

async function main(){
    var path = './wwwroot';
    var dirArr = [];
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        for(let item of data){
            if(await isDir(path+'/'+item)){
                dirArr.push(item)
            }
        }
        console.log(dirArr);
    })
}
main();