const sd = require('silly-datetime');
const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
console.log(time);