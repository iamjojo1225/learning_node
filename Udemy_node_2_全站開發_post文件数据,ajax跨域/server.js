const http = require('http');
const util = require('buffer_util');
const fs = require('fs');

http.createServer((req, res)=>{
	// console.log(req.headers);
	let boundary = '--'+req.headers['content-type'].split('; ')[1].split('=')[1];
	// console.log(boundary)
	let arr = [];  //?

	req.on('data', buffer=>{
		arr.push(buffer);
	});
	req.on('end',()=>{

		let buffer = Buffer.concat(arr);

		//1. 切分隔符
		let res = util.bufferSlice(buffer, boundary)

		//2. 第0個最後一個，扔掉
		res.pop();
		res.shift();

		//3.每一個處理一下

		res.forEach(buffer=>{
			buffer = buffer.slice(2, buffer.length-2)

			let n = buffer.indexOf('\r\n\r\n');
			let info = buffer.slice(0, n).toString();
			let data = buffer.slice(n+4);

			if(info.indexOf('\r\n') != -1){
				//文件
				console.log(info)

				//name
				let name = info.split('; ')[1].split('=')[1];
				name = name.substring(1, name.length-1);

				//檔案名稱
				let fileName = info.split('; ')[2].split('=')[1].split('\r\n')[0];
				fileName = fileName.substring(1, fileName.length-1);

				fs.writeFile(`upload/${fileName}`, data, err=>{
					if(err){
						console.log(err)
					}else{
						console.log('上傳成功')
					}
				})
			}else{
				//普通信息
				let name = info.split('; ')[1].split('=')[1];
				name = name.substring(1, name.length-1);
			}
		});
	});
}).listen(5050);