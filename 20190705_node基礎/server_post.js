//載入模組
//http網頁模組
const http = require('http');

//url模塊，專門處理url
const url = require('url');

//伺服器
let server = http.createServer((req, res)=>{

	let arr = [];

	req.on('data', buffer=>{
		arr.push(buffer);
	});

	req.on('end', ()=>{
		let buffer = Buffer.concat(arr);

		console.log(buffer.toString())
	});
})

//監聽port
server.listen(5566);