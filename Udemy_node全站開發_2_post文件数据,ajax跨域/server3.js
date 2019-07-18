const http = require('http');


//允許的網域
let allowOrigin = {
	'http://localhost': true,
	'http://aaa.com': true,
	'https://aaa.com': true,
}


http.createServer((req, res)=>{

	// console.log(req.headers);
	//利用 origin 的頭 來驗證。
	let {origin} = req.headers;

	//跨域
	if(allowOrigin[origin] == true){
		res.setHeader('Access-Control-Allow-Origin', '*');
	}

	res.write('{"a": 12, "B": "JOJO"}');

	res.end();

}).listen(5050);