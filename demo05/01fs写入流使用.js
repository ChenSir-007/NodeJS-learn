const fs = require('fs');
var str = '';

for(let i = 0;i < 500;i++){
    str += '这是第二条数据\n';
}

var writeStream = fs.createWriteStream('./data/output.txt');

writeStream.write(str);

// 标记写入完成
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})