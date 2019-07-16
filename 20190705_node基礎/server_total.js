//載入模組
//http網頁模組
const http = require('http');
//url模塊，專門處理url
const url = require('url');
//querystring模塊
const querystring = require('querystring');
const fs = require('fs');


//伺服器
let server = http.createServer((req, res)=>{

	let path = '';
	let get = {};
	let post = {};

	//接收數據
	if(req.method === 'GET') {

		let {pathname, query} = url.parse(req.url, true);

		path = pathname;
		get = query;
		complete();

	}else if(req.method === 'POST'){
		path = req.url;

		let arr = [];
		req.on('data', buffer=>{
			arr.push(buffer);
		});
		//結束
		req.on('end', ()=>{
			let buffer = Buffer.concat(arr);

			post = querystring.parse(buffer.toString());
			complete();
		});
	}

	function complete() {
		console.log(path, get, post);


	}

}).listen(5566);

//監聽port
server