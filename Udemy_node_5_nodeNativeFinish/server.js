const http = require('http');
const zlib = require('zlib');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
	let {pathname} = url.parse(req.url, true);
	let filepath = 'www' + pathname;


	//檢查文件是否存在
	fs.stat(filepath, (err, stat)=>{
		if(err){
			// res.setHeader('content-encoding', 'deflate')
			res.writeHeader(404);
			res.write('not found');
			res.end();
		}else{
			let rs = fs.createReadStream('www'+pathname);
			res.setHeader('content-encoding', 'gzip')
			rs.on('error', err=>{})
			//壓縮
			let gz = zlib.createGzip();
			rs.pipe(gz).pipe(res);
		}
	})




}).listen(5050);
