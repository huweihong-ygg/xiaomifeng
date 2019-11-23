const express=require("express");
var router=express.Router();
var pool=require("../pool");

//首页轮播请求 
router.get("/lunbo",(req,res)=>{
  var sql="SELECT * FROM ecake_index_carousel";
  pool.query(sql,[],(err,result)=>{
   if(err) throw err;
    res.send(result);
  })
})

// 精选食材
router.get("/ingredient",(req,res)=>{
var sql="select * from ecake_ingredients";
pool.query(sql,[],(err,result)=>{
 if(err)throw err;
 if(result.length>0){
   res.send(result)
 }

})  
})

router.get("/recommand",(req,res)=>{ //首页蛋糕推荐
var sql = "select * from ecake_index where is_recommand=1 order by  is_recommand";
pool.query(sql,[],(err,result)=>{
  if(err) throw err;
  if(result.length>0){
    res.send(result)
  }else{
    res.send({code:0,msg:"NOT HAVE THIS "})
  }
})
})

router.get("/birthday",(req,res)=>{ //首页生日蛋糕
  var sql = "select * from ecake_index where is_birthday=1 order by  is_birthday";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:0,msg:"NOT HAVE THIS "})
    }
  })
  })

//获取某一个蛋糕
router.get("/cake",(req,res)=>{ //首页生日蛋糕
  var sql = "select * from ecake_index where pid=?";
  var pid = req.query.pid;
  pool.query(sql,[pid],(err,result)=>{
  if(err) throw err;
  if(result.length>0){
  res.send(result);
  }else{
  res.send({code:0,msg:"NOT THIS CAKE "})
  }
  })
  })









console.log("首页模块连接")
module.exports=router;
//http://localhost:5050/index

