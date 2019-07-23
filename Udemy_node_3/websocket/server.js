const http = require('http');
const io = require('socket.io')


//1. 建立http
let server = http.createServer((req, res)=>{

}).listen(5050);

//2. 建立ws
let wsServer = io.listen(server);
wsServer.on('connection', sock=>{
	//sock.emit('name', 數據) 發送數據
	//sock.on('name', function(數據){});

	sock.on('aaa', (a, b)=>{
		console.log(a , b, a+b)
	})

	setInterval(()=>{
		sock.emit('timer', new Date().getTime())
	}, 1000);
})