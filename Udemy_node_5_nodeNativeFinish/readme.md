-----------------------------
# node全站開發 第五課 原生收尾
-----------------------------

## 概述

- 流操作: 連續的
	```js
	//stream.js
	fs.readFile('www/1.html', (err,buffer)=>{
		res.write(buffer)
	})
	```
	- 缺點: 佔用內存、資源使用不均勻
	- 期望運作模式: 讀一塊、發一塊
	- 流操作，就是讀一塊發一塊

- 啟動器: 自動重啟、一直運行

------

## 讀寫流-壓縮、加密

配合http-使用壓縮
須設定頭
res.setHeader('content-encoding', 'gzip')

	content-encoding
	deflate: 普通二進制數據
	gzip: 壓縮數據

##  啟動器
- forever
	```npm
	npm i forever -g
	```
	- forever strat xxx.js
	- forever restrat xxx.js
	- forever stop xxx.js
	- forever stopall

	- forever strat xxx.js -l c:/a.log -e c:/err.log -a
		-l log的簡稱 指定log輸出到指定位置
		-o 普通輸出
		-e 錯誤信息
		-a 不清除之前日誌，往後繼續添加

- pm2
	```npm
	npm i pm2 -g
	```

------

1.合再一塊用
2.router

------

## process模組
取得電腦很多的相關資料

------

## 資料庫注入式攻擊

>encodeURIComponent() 轉義除了字母、數字、(、)、.、!、~、*、'、-和_之外的所有字符。

INSERT INTO item_table (title, price, count) VALUES(title,price,count)
假如在 VALUES('${title}', ${price}, ${count}) 這段，添加代碼 「 'a'); DELETE FORM item_table; SELECT (1' 」，
利用encodeURIComponent 轉碼 encodeURIComponent('a')ㄤ DELETE FORM item_table; SELECT (1')
得出 a')%3B%20DELETE%20FORM%20item_table%3B%20SELECT%20(1

INSERT INTO item_table (title, price, count) VALUES('a'); DELETE FORM item_table; SELECT (1,price,count)
就會變成是注入式攻擊，會刪除資料表。

------

##圖解流

|--|--|HTTP→|--|--|
|--|--|--|--|--|
|...|...|body2|body1|header|
|...|...|3|2|1|

------

##數據庫回滾
>回滾是甚麼: 要馬都完成，要馬都不完成，防止數據突然斷電造成的錯誤。
```js
db.query('start transaction();')
db.query('SELECT (); UPDATE();')
db.query('commit(;)')
```
