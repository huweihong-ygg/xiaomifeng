const express=require("express");
var router=express.Router();
var pool=require("../pool");

//蛋糕二级页面
//奶油蛋糕
router.get("/CreamCake",(req,res)=>{ 
    var sql = `select * from ecake_index where categrate="奶油蛋糕"`;
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        res.send(result)
      }else{
        res.send({code:0,msg:"NOT HAVE THIS "})
      }
  })
  })
//冰激凌蛋糕
  router.get("/IceCream",(req,res)=>{ 
    var sql = `select * from ecake_index where categrate="冰激凌蛋糕"`;
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        res.send(result)
      }else{
        res.send({code:0,msg:"NOT HAVE THIS "})
      }
  })
  })
//芝士蛋糕
  router.get("/Cheese",(req,res)=>{ 
    var sql = `select * from ecake_index where categrate="芝士蛋糕"`;
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        res.send(result)
      }else{
        res.send({code:0,msg:"NOT HAVE THIS "})
      }
  })
  })
  //巧克力蛋糕
  router.get("/Chocolates",(req,res)=>{ 
    var sql = `select * from ecake_index where categrate="巧克力蛋糕"`;
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
        res.send(result)
      }else{
        res.send({code:0,msg:"NOT HAVE THIS "})
      }
  })
  })
//人气热销
router.get("/Popularity",(req,res)=>{ 
  var sql = `select * from ecake_index where categrate="人气热销"`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:0,msg:"NOT HAVE THIS "})
    }
})
})
//生日蛋糕
router.get("/Birthday",(req,res)=>{ 
  var sql = `select * from ecake_index where categrate="生日蛋糕"`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:0,msg:"NOT HAVE THIS "})
    }
})
})
//好评优选
router.get("/Praise",(req,res)=>{ 
  var sql = `select * from ecake_index where categrate="好评优选"`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:0,msg:"NOT HAVE THIS "})
    }
})
})
//馈赠推荐
router.get("/Recommend",(req,res)=>{ 
  var sql = `select * from ecake_index where categrate="馈赠推荐"`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result)
    }else{
      res.send({code:0,msg:"NOT HAVE THIS "})
    }
})
})





  module.exports=router;
