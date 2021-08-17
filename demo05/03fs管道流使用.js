const fs = require('fs');
var readStream = fs.createReadStream('./虎杖头像.jpeg');
var writeStream = fs.createWriteStream('./data/虎杖头像.jpeg');

readStream.pipe(writeStream);