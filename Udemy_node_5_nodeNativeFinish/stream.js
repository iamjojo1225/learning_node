const fs = require('fs');

//開一個1.txt的讀取流
let rs = fs.createReadStream('1.txt');

//開一個2.txt的寫入流
let ws = fs.createWriteStream('2.txt');

rs.pipe(ws);

rs.on('error', err=>{
	console.log('err', err);
});

ws.on('finish', ()=>{
	console.log('完成');
});