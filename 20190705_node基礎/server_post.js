//載入模組
//http網頁模組
const http = require('http');

//url模塊，專門處理url
const url = require('url');

//querystring模塊
const querystring = require('querystring')

console.log('server running')

//伺服器
let server = http.createServer((req, res)=>{

	let arr = [];

	//on'data'有數據過來，二進制
	req.on('data', buffer=>{
		arr.push(buffer);
	});

	//結束
	req.on('end', ()=>{
		let buffer = Buffer.concat(arr);

		let post = querystring.parse(buffer.toString());
		console.log(post);
	});
})

//監聽port
server.listen(5566);