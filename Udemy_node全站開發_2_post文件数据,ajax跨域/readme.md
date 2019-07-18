-----------------------------
# node全站開發 2
-----------------------------

## package.json
	- --save-dev: -S 開發版本作用
	- --save: -D 編譯完後，生產版本作用

npm/cnpm 大陸用的

yarn: FB出的管理器
	```
	npm i yarn
	yarn add xxx
	```

bower-前端包管理
	```
	npm i bower -g
	bower i xxx (jquery)
	```

--------

## 系統包(常用基礎)
- assert 斷言
	```js
	//assert.js
	assert(條件, 消息);

	//深度比較 相當於 ==
	assert.deepEqual(變量, 預期值, msg);

	//深度比較，更加嚴格 相當於 ===
	assert.deepStrictEqual(變量, 預期值, msg);
	```
- path 路徑
	```js
	//path.js
	```
- url 網址
- querystring 請求數據，解析拼裝querystring ***
- net 網路通信 極少用，但很有價值的基礎知識；神奇事情
	net 傳輸層



--------

## OSI 網路參考模型

	七層參考模型
	物理層 > 數據鏈路層(內網) > 網路層(IP、外網) > 傳輸層(TCP) > 會話層 > 表現層 > 應用層(HTTP)

 	五層參考模型
	物理層 > 數據鏈路層(內網) > 網路層(IP、外網) > 傳輸層(TCP) > 應用層(HTTP)

--------

## net 傳輸層

	TCP:
		優點: 嚴謹、有順序
		缺點: 速度慢
		適合: 傳輸文件
	UDP:
		優點: 快速
		缺點: 資料可能會丟失
		適合: 影像

--------

數據通信:
- GET
- POST
	- 普通數據 querystring
	- 文件數據 (原生不支援文件數據解析，需直接操作二進制數據)

--------

## 處理處理文件數據

POST

	------WebKitFormBoundaryVWmgz58g8sJB3Aqy
	Content-Disposition: form-data; name="username"

	123
	------WebKitFormBoundaryVWmgz58g8sJB3Aqy
	Content-Disposition: form-data; name="password"

	555
	------WebKitFormBoundaryVWmgz58g8sJB3Aqy
	Content-Disposition: form-data; name="f1"; filename="aaa.TXT"
	Content-Type: text/plain

	this is a test txt
	content: aaa
	------WebKitFormBoundaryVWmgz58g8sJB3Aqy--

	========

	<分隔符>\r\n字段訊息\r\n\r\n內容\r\n<分隔符>\r\n字段訊息\r\n\r\n內容\r\n<分隔符>\r\n字段訊息\r\n\r\n內容\r\n<分隔符>--

	1. 用<分隔符>切分
	[
		null,
		"\r\n字段訊息\r\n\r\n內容\r\n",
		"\r\n字段訊息\r\n\r\n內容\r\n",
		"\r\n字段訊息\r\n\r\n內容\r\n",
		"--"
	]

	2. 第0個最後一個，扔掉
	[
		"\r\n字段訊息\r\n\r\n內容\r\n",
		"\r\n字段訊息\r\n\r\n內容\r\n",
		"\r\n字段訊息\r\n\r\n內容\r\n"
	]

	3. 每一項
	"\r\n字段訊息\r\n\r\n內容\r\n"

	"字段訊息\r\n\r\n內容"

	"字段訊息", "內容"

--------

## server2.js 演示使用 multiparty
> 使用post.html傳檔案上去

--------

一、數據通訊

> ajax、跨域、
> fetch
> Ajax2.0->formData
> webSocket

二、數據庫

二、框架

--------

ajax:
- 元生
- jquery

--------

## server3.js 演示使用 ajax
> 使用ajax.html傳檔案上去

--------

ajax為啥不能跨域
SOP-同源策略

ajax 如何跨域 - origin、Access-Control-Allow-Origin

--------

**end**