//載入模組
//http網頁模組
const http = require('http');
//url模塊，專門處理url
const url = require('url');
//querystring模塊
const querystring = require('querystring');
const fs = require('fs');

let users = {'pipi': 123};
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
		if(path == '/reg'){

			let {username, password} = get;
			if(users[username]){
				res.write(JSON.stringify({error: 1, msg:'此用戶名已存在'}));
				res.end();
			}else{
				users[username] = password;
				res.write(JSON.stringify({error: 0, msg: '成功'}));
				res.end();
			}

		}else if(path == '/login'){
			let {username, password} = get;

			if(!users[username]){
				res.write(JSON.stringify({error: 1, msg: 'not find user'}));
				res.end();
			}else if(users[username] != password){
				res.write(JSON.stringify({error: 1, msg: 'password is error'}));
				res.end();
			}else{
				res.write(JSON.stringify({error: 0, msg: 'success'}));
				res.end();
			}
		}else{
			fs.readFile(`www${path}`, (err, buffer)=>{
				if(err){
					res.writeHeader(404);
					res.write('Not find');
					res.end();
				}else{
					res.write(buffer);
					res.end();
				}
			})
		}
	}

}).listen(5566);
