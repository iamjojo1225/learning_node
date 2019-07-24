const http = require('http');
const mysql = require('mysql');
const url = require('url');
const fs = require('fs');

//1.連接到服務器
let db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database:'20181101'});


//2.與http配合

http.createServer((req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	const {pathname, query} = url.parse(req.url, true);

	if(pathname == '/reg'){
		//0.參數是否正確

		let {username, password} = query;
		if(!username || !password){
			res.write('用戶和密碼不可為空')
			res.end();
		}else if(username.length > 32){
			res.write('用戶名最大32字')
			res.end();
		}else if(password.length > 32){
			res.write('密碼最大32字')
			res.end();
		}else{
			//1. 檢查用戶是否用過
			db.query(`SELECT username FROM user_table WHERE username ='${username}'`, (err,data)=>{
				if(err){
					res.write('數據庫有錯1');
					res.end();
				}else if(data.length>0){
					res.write('此用戶名已被使用');
					res.end();
				}else{
					db.query(`INSERT INTO user_table (username, password) VALUES('${username}','${password}')`, err=>{
						if(err){
							res.write('數據庫有錯2');
							console.log('err')
							res.end();
						}else{
							res.write('成功');
							res.end();
						}
					})
				}
			});
			//2. 插入
		}


	} else if(pathname == '/login'){
		//1.檢查用戶銘是否存在
		//2.密碼是否正確
		//3.返回
	} else {
		fs.readFile('www' + pathname, (err, buffer)=>{
			if(err){
				res.writeHeader(404)
				res.write('not fiund');
			}else{
				res.write(buffer);
			}
			res.end();
		})
	}
}).listen(5050);