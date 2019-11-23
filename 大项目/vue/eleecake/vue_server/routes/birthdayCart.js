const express=require("express");
var router=express.Router();
var pool=require("../pool");

router.get("/brithday_carousel",(req,res)=>{ 
    var sql = "select * from `brithday_carousel`";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;   
        res.send(result)
  })
  })

  router.get("/brithday_cart",(req,res)=>{ 
    var sql = "select * from `brithday_cart`";
    pool.query(sql,[],(err,result)=>{
      if(err) throw err;   
        res.send(result)
  })
  })

  //热销爆款
router.get("/Hot",(req,res)=>{ 
    var sql = `select * from ecake_index where categrate="热销爆款"`;
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