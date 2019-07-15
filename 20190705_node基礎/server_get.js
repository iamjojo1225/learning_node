//載入模組
//http網頁模組
const http = require('http');

//經常使用，但URL模塊更加方便，請看server_get2
const querystring = require('querystring');

//伺服器
let server = http.createServer((req, res)=>{
	let [url, query] = req.url.split('?');
	let get = querystring.parse(query);

	console.log(url);
	console.log(get);

})

//監聽port
server.listen(5566);