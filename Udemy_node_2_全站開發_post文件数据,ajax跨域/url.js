const url = require('url');

let srt = 'http://www.bing.com:5566/a/b/1.html?a=12&b=5';

console.log(url.parse(srt, true));