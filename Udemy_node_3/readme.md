-----------------------------
# node全站開發 第三課 数据通信,fetch，ajax2.0和websocket
-----------------------------

## 概述

- fetch 原生，取代AJAX
- jsonp 逐漸式微 被 ajax 取代
- FormData 可直接提交表單、提交文件
- webSocket 新的東西

------
## fetch

fetch 原生、XHR
> 二步驟
> 1.請求、讀取
> 2.解析

------

## jsonp
> 越用越少，對瀏覽器伺服器都不安全
1.原理
2.jQuery

```js
<script src="其他網站"></script>
```

------

## Ajax2.0

formData 表單數據

------

## WebSocket

>優點:
>1.性能高
>2.雙向通信

- socket.io
	1.簡單方便
	2.兼容IE5 (可支援低階瀏覽器)
	3.自動數據解析


- 原生WebSocket
	握手
	
客戶端| |服務器
---|---|---
|申請→|
|←能|
|請求→|
