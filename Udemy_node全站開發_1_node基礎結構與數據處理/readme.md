#node基礎練習


====================================

## 同步
## 異步

====================================

## http
## fs
## url

====================================

## 服務器

### 1.響應請求

### 2.數據交互

	* #### HPPT-協議

	* HPPT 1.0 RFC-1945
	* HPPT 1.1 RFC-2616	持久連接
	* HPPTS	 RFC-2888	安全協議
	* HPPT 2.0 RFC-7450	加密、頭部壓縮、服務器推送、管線操作、多路實用

#### HPPT封包結構

	##### 結構
	herder
	訊息
	<=32K

	body
	數據
	<=2G

狀態碼:

	* 1xx 訊息(websocket會用到)
	* 2xx 成功
	* 3xx 重定向(轉址)
	* 4xx 請求錯誤
	* 5xx 伺服器錯誤

請求方法:

	GET	獲取數據
		數據放在url內傳輸
		1.容量小<=32k

	POST	發送數據
		1.容量大

### 3.資料庫



====================================

#### 接收瀏覽器的get數據-url
```js

	//server_get2.js
	//url模塊
	url.pares(req.url, true)=>{
		pathname, query
	}

	GET=>"/aaa/b?xxx=xxx&xx=xx"
	url.parse('xx');

```

#### 接收瀏覽器的POST數據
```js

	post 會分多次發數據，因為post大，無法一次傳輸
	接收瀏覽器的POST數據-body
	分幾次，注意，傳送時不能因想省事而轉成字符串

	let arr = [];
	req.on('data', buffer=>{
		arr.push(buffer)
	});
	req.on('end',()=>{
		let buffer = Buffer.concat(arr);
	});

	POST=>"xxx=xxx&xx=xx"
	querystring.parse('xx');

```

====================================

接口-API:
用戶註冊、登入

服務器:
	1.請求文件->結果
	2.請求接口->操作

====================================

註冊接口:
/reg?user=xxx&password=xxx
=>{error: 0, msg: '為什麼'}

登入接口:
/login?user=xxx&password=xxx
=>{error: 1, msg: '為什麼'}


====================================

## 課堂總整理
http原理
fs.writeFile/readFile
url.parse
querystring.pares

解析數據: GET、POST

完整的服務器:
	1.處理文件
	2.出裡接口
	3.儲存數據


====================================

模塊:
	1.系統
	2.第三方

====================================

Node.js 的模塊系統

	1.定義模塊
		CMD
		AMD
		ESM(ES6)

		每一個文件就是一個模塊
		module	 批量導出
		exports
		require

		require:
		1.如果帶有路徑-去路徑下面去找 EX: './mod1'
		2.如果沒有:
			node_modules文件夾 EX: 'mod1'
			系統node_modules

	//mod1.js 輸出
	```js
	exports.a = 12;
	exports.b = 5;
	```

