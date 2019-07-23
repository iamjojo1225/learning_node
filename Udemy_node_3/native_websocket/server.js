// const http = require('http');
const net = require('net');

let server = net.createServer(sock=>{
	console.log('有人連接我')

	sock.on('end',()=>{
		console.log('已斷開');
	})
});

server.listen(5050);