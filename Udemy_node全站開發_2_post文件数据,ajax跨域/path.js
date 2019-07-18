const path = require('path');

let str = '/root/a/b/1.txt';

//dirname 取路徑
console.log(path.dirname(str));

//extname 指提取副檔名
console.log(path.extname(str));

//basename 提取文件名
console.log(path.basename(str));

//合併路徑
console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'strict')) //C:\root\a\c\strict

//resolve解析出來是絕對路徑
console.log(path.resolve(__dirname, 'bulid'))
//__dirname 魔術變量 當前目錄
