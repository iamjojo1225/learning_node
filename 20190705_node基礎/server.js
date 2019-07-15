//載入模組
//http網頁模組
const http = require('http');
//文件模組
const fs = require('fs');

//伺服器
let server = http.createServer((req, res)=>{

	//設置herd
	res.setHeader("Content-Type", "text/html; charset=utf-8");

	//接值傳值
	fs.readFile(`./www${req.url}`, (err, buffer)=>{
		if(err){
			res.writeHeader(404);
			res.write('查無此頁 404');
			res.end();
		}else{
			res.write(buffer);
			res.end();
		}
	})
})


//監聽port
server.listen(5566);