//路由表
let router={};

function addRouter(method, url, fn){
  method=method.toLowerCase();
  url=url.toLowerCase();

  //如果有就用，沒有就新建一個
  router[method]=router[method]||{};
  router[method][url]=fn;
}

/**
 * 
 * @param {string} method  POST、GET
 * @param {string} url 路由
 */
function findRouter(method, url){
  method=method.toLowerCase();
  url=url.toLowerCase();

  if(!router[method] || !router[method][url]){
    return null;
  }else{
    return router[method][url];
  }
}

module.exports={
  addRouter, findRouter
};
