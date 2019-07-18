// const buffer = require('buffer');

let buffer = new Buffer('abc\r\ndfasdasd\r\nffccadg');

let buffer2 = new Buffer('\r\n');

console.log(buffer.indexOf(buffer2));