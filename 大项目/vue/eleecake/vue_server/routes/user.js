const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象 
var router=express.Router();
//添加路由
// index	
//1.登录 手机号验证
router.get("/loginphone",function(req,res){
  var $phone=req.query.phone;
  // console.log($phone)
  var sql="select uid from ecake_user where phone=?";
  pool.query(sql,[$phone],function(err,result){
  if(err) throw err;
  if(result.length>0){
  //4.2:获取当前登录用户id
  var uid=result[0].uid;
  //4.3:将用户id保存session对象
  req.session.uid=uid;
  console.log(req.session);
  res.send({code:1,msg:"登录成功"});  
  }else{
  res.send({code:0,msg:"登录失败"});
  }
  })
  })
        
// // 用户名密码验证登录
// router.get("/userlogin",function(req,res){
//   var $uname=req.query.uname;
//   var $upwd=req.query.upwd;
//   console.log($uname)
//   console.log($upwd)
//   var sql="select uid from ecake_user where uname=? and upwd=md5(?)";
//   pool.query(sql,[$uname,$upwd],function(err,result){
//   if(err) throw err;
//   if(result.length>0){
//     res.send({code:1,msg:"登录成功"});	  
//   }else{
//     res.send({code:0,msg:"登录失败"});
//     }
  
//   })
//  })

        
 //查找用户名   
 router.get("/seluser",function(req,res){
        //接收数据		 
        var $uname=req.query.uname;
        console.log($uname)
        var sql="select * from ecake_user where uname=?"; 
         pool.query(sql,[$uname],function(err,result){
        if(err) throw err;
        if(result.length>0){
        console.log("用户名重复")
        res.send({code:1,msg:"用户已被注册"})
            return;
        }else{
        res.send("0")
        }
        
    })       
    })
        
 //用户名不重复则进行注册
router.get("/reguser",function(req,res){
//获取数据
    var obj=req.query;
//非空验证
console.log(obj)
    for(var key in obj){
    if(!obj[key]){
        res.send("0");
        return;
    } 
    }

var sql="insert into ecake_user set?";
pool.query(sql,[obj],function(err,result){
if(err) throw err;
    if(result.affectedRows>0){
    res.send({code:1,msg:"注册成功",})
    }else{
    res.send("0");
    }

})
})





router.get("/userlogin",(req,res)=>{
 //1:获取参数uname/upwd
 //脚手架传数 
 // http://127.0.0.1:3000?uname=tom&upwd=123 
//  http://127.0.0.1:5050/user/login?uname=tom&upwd=123456
 var uname = req.query.uname;
 var upwd =  req.query.upwd;
 console.log(1+":"+uname+":"+upwd);
 //2:创建sql语句
 var sql = "SELECT uid FROM ecake_user WHERE uname = ? AND upwd = md5(?)";
 //3:执行sql语句
 pool.query(sql,[uname,upwd],(err,result)=>{
   //err 严重错误，程序停止
   if(err)throw err;
  //4:判断执行是否成功
   if(result.length==0){
     res.send({code:-1,msg:"用户名或密码有误"});
   }else{
     //4.1:登录成功或将
     //登录凭证id保存session对象
     //4.2:获取当前登录用户id
     var uid=result[0].uid;
     //4.3:将用户id保存session对象
     req.session.uid=uid;
     console.log(req.session);
     res.send({code:1,msg:"登录成功"});
   }
  //5:将结果发送脚手架
 })
})



//获取蛋糕的规格
router.get("/size",(req,res)=>{
   var cid=req.query.cid;
   var sql="SELECT * FROM cake_guige where  cid=?"
   pool.query(sql,[cid],(err,result)=>{
      if(err)throw err;
      if(result.length>0){
        res.send(
          {
             code:1,
             msg:"查询成功",
             data:result
          }
       ) 
     }else{
      res.send({code:0,msg:'查询失败'});
    }
   })
})

//获取每个蛋糕的轮播图和详情介绍的图片
router.get("/imgs",(req,res)=>{
  var cid=req.query.cid;
  var sql="SELECT * FROM details_imgs_lunbo  where  cid=?"
  pool.query(sql,[cid],(err,result)=>{
     if(err)throw err;
     if(result.length>0){
       res.send(
         {
            code:1,
            msg:"查询成功",
            data:result
         }
      ) 
    }else{
     res.send({code:0,msg:'查询失败'});
   }
  })
})


//获取每个蛋糕详情介绍的图片
router.get("/bigimgs",(req,res)=>{
  var cid=req.query.cid;
  var sql="SELECT * FROM bigImags where cid=?"
  pool.query(sql,[cid],(err,result)=>{
  if(err)throw err;
  if(result.length>0){
  res.send(result) 
  }else{
  res.send({code:0,msg:'查询失败'});
  }
  })
  })
  
  //获取每个蛋糕的评价
  
  router.get("/pingjias",(req,res)=>{
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  var sp_id = req.query.sp_id;
  if(!pno){pno=1}
  if(!ps){ps=6}
  var offset=(pno-1)*ps;
  ps=parseInt(ps);
  var sql1="SELECT * FROM cake_pingjia WHERE sp_id=? LIMIT ?,?"
  pool.query(sql1,[sp_id,offset,ps],(err,result)=>{
  if(err)throw err;
  var data=result;
  var sql2="SELECT count(id) as c FROM cake_pingjia"
  pool.query(sql2,(err,result)=>{
  if(err)throw err;
  var pageCount=Math.ceil(result[0].c/ps);
  res.send(
  {
  code:1,
  msg:"查询成功",
  data:data,
  pageCount:pageCount
  }
  ) 
  })
  })
  })


// 客服回复
router.get("/liaotian",(req,res)=>{
var question=req.query.question;
var sql1="select * from liaotian where question=?"
// var sql2="select * from liaotian where question=?"
 if(question==""){
pool.query(sql1,[question],(err,result)=>{
if(err) throw err;
res.send(result)
console.log(result)
})
 }
 else{
  pool.query(sql1,[question],(err,result)=>{
if(err) throw err;
res.send(result)
console.log(result)
})
 }
 
 // http://127.0.0.1:5050/user/liaotian?question=%E8%9B%8B%E7%B3%95%E6%80%8E%E4%B9%88%E4%B9%B0
})
router.get("/liaotian2",(req,res)=>{
  var question=req.query.question;
  var sql1="select * from liaotian where question=?"
  // var sql2="select * from liaotian where question=?"
  pool.query(sql1,[question],(err,result)=>{
  if(err) throw err;
  res.send(result)
  console.log(result)
  })
   // http://127.0.0.1:5050/user/liaotian?question=%E8%9B%8B%E7%B3%95%E6%80%8E%E4%B9%88%E4%B9%B0
  });
  


  router.get("/addcart",(req,res)=>{
    //2:获取当前登录用户uid
    var uids = req.session.uid;
    //3:如果用户没有登录 !!!
    if(!uids){
    //4:返回错误消息 请登录
    res.send({code:-1,msg:"请登录"});
    return;
    }
    // 5:获取商品编号;商品价格;商品名称
    var pid = req.query.pid; //商品的id
    var price = req.query.price;
    var changdu = req.query.changdu;
    var peoples = req.query.peoples;
    var tools = req.query.tools;
    var lowerPeople = req.query.lowerPeople;
    var upperPeople = req.query.upperPeople;
    var counts = req.query.counts;
    var title = req.query.title;
    var pic = req.query.pic;
    req.query.uids = uids;
    //console.log(pic);
    //6:查询指用户是否购买过此商品
    var sql = "SELECT id FROM cake_carts WHERE uids = ? AND pid = ?";
    //7:执行sql
    pool.query(sql,[uids,pid],(err,result)=>{
    if(err)throw err;
    //8:如果用户没有购买过此商品添加
    //9:如果用户己经购买过此商品更新数量
    if(result.length==0){
    var sql = "INSERT INTO cake_carts set ?"; 
    pool.query(sql,[req.query],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"});
    })
    }else{
    console.log(counts);
    var sql ="UPDATE cake_carts SET counts=counts+1 WHERE uids=? AND pid=?";
    pool.query(sql,[uids,pid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"});
    })
    }
    })
    //10:执行sql并且将结果返回用户
    })
    
    
    router.get('/getCarts',(req,res)=>{
    var sql = 'select * from cake_carts';
    pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
    })
    })







console.log("用户模块已连接")
//导出路由器对象
module.exports=router;        