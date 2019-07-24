-----------------------------
# node全站開發 第四課 資料庫
-----------------------------

## 概述

- 分類
	- 文件型: 輕、小、簡單、適合單機存儲少量數據
		- access、sqlite
	- 關聯型: 功能強、性能次
		- MySQL、Oracle
	- 分布式: 單機性能不高但能穿起來用、總體吞吐量高、成本低
		- mongoDB
	- NoSQL: 瞬間吞吐量高、性能高、保證數據安全性、自帶分布
		- memcache、**redis**

- 安全性
	- 注入

- 操作
	- 管理性操作: 工具
	- 增刪查改: NODE

------

## 管理工具
navicat
phpmyadmin、wamp

------

庫
表

類型:
數字
文本
	varvhar - 短
	text - 2G
- 索引
	- 主鍵: 唯一+索引
		1.不重複
		2.性能最高的

	- 唯一(UNIQUE):
		不重複

	- 索引:
		優點: 提高查詢性能
		缺點: 降低其他操作性能、占空間

	- 全文索引
		適合: 文本搜尋

|瀏覽器|後台|數據庫|
|----|----|-----|
|JS|node.js|SQL|
|要校驗→|要校驗→|要校驗|

------

## SQL- 四大語句

- 增 INSERT
    INSERT INTO <表> (字段, ...) VALUES(值, ...)
    ```SQL
    INSERT INTO user_table (username,password) VALUES('list', '111111');
    ```

- 刪 DELETE
	DELETE FROM <表> WHERE 條件;
	```SQL
	DELETE FROM user_table WHERE ID=2;
	```

- 改 UPDATE
	UPDATE <表> SET 字段=新值, 字段=新值,... WHERE 條件;
	```SQL
	UPDATE user_table SER password='654321', username=jojo WHERE ID=1;
	```

- 查 SELECT
	SELECT 字段列表 FROM <表> WHERE 條件 ORDER BY 字段 LIMIT 0,30;
	```SQL
	SELECT username FROM user_table WHERE ID=<5 ORDER BY ID DISC LIMIT 1;
	```

------

## Node.js 操作資料庫

1.mysql 模塊
2.連接池
 createPool
3.異不操作