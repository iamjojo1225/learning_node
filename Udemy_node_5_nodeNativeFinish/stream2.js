const fs = require('fs');
const zlib = require('zlib');

//開一個1.txt的讀取流
let rs = fs.createReadStream('demo.png');
//壓縮
let gz = zlib.createGzip();
//開一個2.txt的寫入流
let ws = fs.createWriteStream('demo.png.gz');

rs.pipe(gz).pipe(ws);

rs.on('error', err=>{
	console.log('err', err);
});

ws.on('finish', ()=>{
	console.log('完成');
});