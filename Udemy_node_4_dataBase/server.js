const http = require('http');
const mysql = require('mysql');

//1.連接到服務器
let db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database:'20181101'});

// db.query('SELECT * FROM user_table', (err, data)=>{
// 	if(err){
// 		console.log('err', err);
// 	}else{
// 		console.log('data', data);
// 	}
// })


let username = 'lulu';
let password = '5566';
db.query(`INSERT INTO user_table (username, password) VALUES('${username}', '${password}')`, (err, data)=>{
	if(err){
		console.log('err', err);
	}else{
		console.log('data', data);
	}
})