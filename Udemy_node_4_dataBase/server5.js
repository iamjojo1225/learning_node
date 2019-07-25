const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql')
const url = require('url');
const fs = require('fs');
const validator = require('./libs/validator.js');


//1.連接到服務器
let conn = mysql.createPool({
	//connectionLimit 預設10
	connectionLimit: 10,
	host: 'localhost', user: 'root', password: 'root', database:'20181101'
});

let db = co(conn);


//2.與http配合

http.createServer(async(req, res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	const {pathname, query} = url.parse(req.url, true);
	if(pathname == '/reg'){
		const {username, password} = query;
		//0.參數是否正確
		let err = validator.username(query.username);
		if(err){
			res.write(err);
		}else{
			let err = validator.password(query.password);
			if(err){
				res.write(err);
			}else{
				try{
					//1. 檢查用戶是否用過
					let data = await db.query(`SELECT username FROM user_table WHERE username ='${username}'`);
					if(data.length > 0){
						res.write('此用戶名已被使用');
					}else{
						await db.query(`INSERT INTO user_table (username, password) VALUES('${username}','${password}')`);
						res.write('註冊成功');
					}
				}catch(e){
					res.write('數據庫有錯');
				};
				res.end();
			}
		}

	} else if(pathname == '/login'){
		//0.檢查用戶名密碼及格式
		//1.檢查用戶銘是否存在
		//2.密碼是否正確
		//3.返回

		const {username, password} = query;

		let err = validator.username(query.username);
		if(err){
			res.write(err);
		}else{
			let err = validator.password(query.password);
			if(err){
				res.write(err);
			}else{
				try{
					let data = await db.query(`SELECT ID,password FROM user_table WHERE username='${username}'`)
					if(data.length == 0){
						res.write('用戶名不存在');
					} else if(data[0].password != password) {
						res.write('密碼不對');
					}else{
						res.write('登入成功');
					}
				}catch(e){
					console.log('數據庫出錯')
				}

			}
		}
		res.end();

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