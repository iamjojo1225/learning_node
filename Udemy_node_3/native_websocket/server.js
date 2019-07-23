// const http = require('http');
const net = require('net');
const crypto = require('crypto');//加密工具

//解析表頭
function praseHeader(str){
	let arr = str.split('\r\n').filter(line=>line)
	arr.shift();

	let headers = {};
	arr.forEach(element=>{
		let [name,value] = element.split(':');

		//正折去空格 轉小寫
		name = name.replace(/^\s+|\s+$/g,'').toLowerCase();
		value = value.replace(/^\s+|\s+$/g,'');

		headers[name] = value;
	})

	return headers;
}
//建立伺服器
let server = net.createServer(sock=>{
	sock.once('data', buffer=>{
		let str = buffer.toString();

		let headers = praseHeader(str);

		//確認是否升級socket
		if(headers['upgrade']!='websocket'){
			console.log('no upgrade')
			sock.end();

		//確認版本
		}else if(headers['sec-websocket-version'] != '13'){
			console.log('no 13')
			sock.end();
		}else{

			//加密規則
			let key = headers['sec-websocket-key'];
			let uuid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
			//加密協議
			let hash = crypto.createHash('sha1');

			//更新
			hash.update(key+uuid);
			let key2 = hash.digest('base64');

			//寫入HTTP協議
			sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade:websocket\r\nConnection:upgrade\r\nSec-Websocket-Accept:${key2}\r\n\r\n`);
			console.log('server 連線建立');

		}
	})

	sock.on('end',()=>{
		console.log('已斷開');
	})
});

server.listen(5050);