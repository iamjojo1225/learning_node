const querystring = require('querystring');

//拆解
console.log(querystring.parse('a=3&b=12&c=55'));

//反向拼出
console.log(querystring.stringify({	a: 3, b: 5,	c: 55}));