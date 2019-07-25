const http = require('http');
const mysql = require('mysql');
const co = require('co-mysql')
const url = require('url');
const fs = require('fs');


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
			try{
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


	} else if(pathname == '/login'){
		//0.檢查用戶名密碼及格式
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