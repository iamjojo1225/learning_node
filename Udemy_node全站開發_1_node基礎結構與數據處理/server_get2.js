//載入模組
//http網頁模組
const http = require('http');

//url模塊，專門處理url
const url = require('url');

//伺服器
let server = http.createServer((req, res)=>{

	/*
	* url.parse(url, 是否自動解析(boolen))
	*/
	result = url.parse(req.url, true);

	console.log(result);


	let {pathname, query} = url.parse(req.url, true);
	console.log(pathname, query);
})

//監聽port
server.listen(5566);