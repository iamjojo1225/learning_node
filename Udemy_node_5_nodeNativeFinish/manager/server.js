const db=require('./libs/database');
const http=require('./libs/http');
const {addRouter}=require('./libs/router');

addRouter('get', '/list', async (res, get, post, files)=>{
  try{
    let data=await db.query(`SELECT * FROM item_table`);
    res.writeJson({error: 0, data});
  }catch(e){
    res.writeJson({error: 1, msg: 'database error'});
  }

  res.end();
});
addRouter('post', '/add', async (res, get, post, files)=>{
  let {title,price,count}=post;

  if(!title || !price || !count){
    res.writeJson({error: 1, msg: 'params invaild'});
    res.end();
  }else{
    price=Number(price);
    count=Number(count);

    if(isNaN(price) || isNaN(count)){
      res.writeJson({error: 1, msg: 'params invaild'});
      res.end();
    }else{
      try{
        //防注入式攻擊，「?」為佔位符，由第二個參數帶入。 
        await db.query('INSERT INTO item_table (title, price, count) VALUES(?,?,?)', [title, price, count]);

        res.writeJson({error: 0, msg: 'success'});
      }catch(e){
        res.writeJson({error: 1, msg: 'database error'});
      }
      res.end();
    }
  }
});
addRouter('post', '/test', async (res, get, post, files)=>{
  let {item1, iten2} = post;
  
});
