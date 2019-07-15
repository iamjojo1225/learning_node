/*
* fs模組，讀寫練習
*/

let fs = require('fs');







readFile('./a.txt')



//================= function ===================

//寫資料
function writeFile(path, text) {
	fs.writeFile(path, text, err=>{
		if(err){
			console.log('失敗: ', err);
		}else{
			console.log('成功');
		}
	})
}

//讀資料
function readFile(path) {
	fs.readFile(path, (err, res)=>{
		if(err){
			console.log('失敗: ', err);
		}else{
			console.log('成功');
		}
	})
}
