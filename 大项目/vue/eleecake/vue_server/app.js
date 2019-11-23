// //vue_server_000/app.js
// //功能：服务器端程序
// //1:下载四个模块
// //  express			web服务器
// //  mysql				mysql驱动
// //  cors				处理跨域
// //  express-session	会话session对象
// //2:vue_server_000/进入命令行
// //  npm i mysql express express-session cors
// //3:加载四个第三方模块
// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const session = require("express-session");

// //4:配置数据库连接池:基本效率高保证
// var pool = mysql.createPool({
//    host:"127.0.0.1",
//    user:"root",
//    password:"",
//    database:"xz",
//    port:3306,
//    connectionLimit:20
// })
// //5:创建web服务器
// var server = express();
// //6:配置跨域  允许程序列表
// //  http://127.0.0.1:8080
// //  http://localhost:8080
// server.use(cors({
//    origin:["http://127.0.0.1:8080","http://localhost:8080"],
//    credentials:true  //每次请求验证
// }))
// //7:配置session环境
// server.use(session({
//    secret:"128位安全字符串",//用于报春数据加密条件
//    resave:true,         //请求更新数据 
//    saveUninitialized:true//保存初始数据
// }));
// //8:配置静态目录 pubic
// //8.1:创建public
// server.use(express.static("public"))
// //9:启动监听端口  3000
// server.listen(3000);
// console.log("启动成功")
// //功能一:用户登录

// server.get("/login",(req,res)=>{
//  //1:获取参数uname/upwd
//  //脚手架传数 
//  // http://127.0.0.1:3000?uname=tom&upwd=123 
//  var uname = req.query.uname;
//  var upwd =  req.query.upwd;
//  console.log(1+":"+uname+":"+upwd);
//  //2:创建sql语句
//  var sql = "SELECT id FROM xz_login WHERE uname = ? AND upwd = md5(?)";
//  //3:执行sql语句
//  pool.query(sql,[uname,upwd],(err,result)=>{
//    //err 严重错误，程序停止
//    if(err)throw err;
//   //4:判断执行是否成功
//    if(result.length==0){
//      res.send({code:-1,msg:"用户名或密码有误"});
//    }else{
//      //???
//       //4.1登陆成功后id保存到session对象
//      var uid = result[0].id;
//       //4.2获取当前登陆用户id
//       //4.3将用户id保存session对象
//       req.session.uid = uid;
//       console.log(req.session);
//      res.send({code:1,msg:"登录成功"});
//    }
//   //5:将结果发送脚手架  
//  })
// })
// //功能二
// //1.参数  pno 页码 1 2 3
//          //pageSIze  一页20 
// //2.sql  select lid,price,lname,pic from xz_laptop LIMIT ?,?  
//    //select count(id) as c from xz_laptop
// //3.返回值 {code:1,msg:'查询成功',data:[],totalPage:5}
// //4.异步

// //1.接受请求  get/product
// server.get('/product',(req,res)=>{
// //2.获取（脚手架发来）的数据  pno  pageSize
//    var pno = req.query.pno;
//    var ps = req.query.pageSize;
// //3.设置数据默认值
// if(!pno){pno=1};
// if(!ps){ps=20};
// //4.创建变量offset 技术按数据库第一参数
// var offset = (pno-1)*ps
// //5.给pageSize 造型整型
// ps = parseInt(ps);
// //6.创建sql 1 查询当前页类容
//  var   sql1="select lid,price,lname,pic from xz_laptop LIMIT ?,?"  
// //7.发送sql 1语句
//  pool.query(sql1,[offset,ps],(err,result)=>{
//     if(err) throw err;
//     console.log(result)
//     //查询结果
//     var data = result;
// //8.在执行成功回调函数中创建第二条 sql
//     var sql2 ="select count(lid) as c from xz_laptop"
// //9.查询记录总数
// pool.query(sql2,(err,result)=>{
//    if(err) throw err;
//    var pageCount = Math.ceil(result[0].c/ps);
//    res.send({code:1,
//       msg:"查询成功",
//       data:data,//当前页的类容
//       pageCount:pageCount//页数
//       //测试：http://127.0.0.1:3000/product
//    })
// })

//  })
// })

// //功能三:添加购物车 144~190  14:31
// //1:get /addcart
// server.get("/addcart",(req,res)=>{
//    //2:获取当前登录用户uid
//    var uid = req.session.uid;
//    //3:如果用户没有登录   !!!
//    if(!uid){
//     //4:返回错误消息 请登录
//     res.send({code:-1,msg:"请登录"});
//     return;
//    }
//    //5:获取商品编号;商品价格;商品名称
//    var lid = req.query.lid;
//    var price = req.query.price;
//    var lname = req.query.lname;
//    //6:查询指用户是否购买过此商品
//    var sql = "SELECT id FROM xz_cart WHERE uid = ? AND lid = ?";
//    //7:执行sql
//    pool.query(sql,[uid,lid],(err,result)=>{
//        if(err)throw err;
//    //8:如果用户没有购买过此商品添加
//    //9:如果用户己经购买过此商品更新数量
//        if(result.length==0){
//        var sql = `INSERT INTO xz_cart VALUES(null,${uid},${lid},${price},'${lname}',1)`; 
//        }else{
//        var sql =`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
//        }
//        pool.query(sql,(err,result)=>{
//          if(err)throw err;
//          res.send({code:1,msg:"添加成功"});
//        })
//    })
//    //10:执行sql并且将结果返回用户
//    })
//    //http://127.0.0.1:3000/login?uname=tom&upwd=123
// //http://127.0.0.1:3000/addcart?lid=1&lname=mac&price=3333
// //刷新浏览器 count=4

// // 功能四：查询当前登录用户购物车列表
// server.get("/findcart",(req,res)=>{

// // 1.获取session中uid
// var uid = req.session.uid; 
// // 2：如果uid为空
// //3:请登录
// if(!uid){
//    res.send({code:-1,msg:"请登录"});
//    return;
//  }
//  //4:创建sql语句查询登录用户购物车列表
//  var sql = " SELECT id,lid,lname,price,count FROM xz_cart WHERE uid = ?";
//  //5:发送sql语句
//  pool.query(sql,[uid],(err,result)=>{
//    if(err)throw err;
//    res.send({code:1,msg:"查询成功",data:result})
//  })
//  //6:获取服务器返回结果并且发脚手架
// })
// //测试
// //http://127.0.0.1:3000/findcart
// //http://127.0.0.1:3000/login?uname=tom&upwd=123
// //http://127.0.0.1:3000/findcart

// // 功能五：删除制定用户购物车列表
// server.get('/dele',(req,res)=>{
// var id = req.query.id;  //参数 id
// var uid = req.session.uid;
// if(!uid){
//    res.send({code:-2,msg:"请登录"});
//    return;
//  }
// var sql="delete  from  xz_cart where id=?"
// pool.query(sql,[id],(err,result)=>{
//       if(err) throw err;
//       if(result.affectedRows>0){
//          res.send({code:1,msg:"删除成功"})
//       }else{
//          res.send({code:-1,msg:"删除失败"})
//       }
// })
// })                        

// // 功能六：删除指定用户购物车中的多个商品
// server.get("/delm",(req,res)=>{
// //参数 ids=3,4,6
// // 1：先获取登陆用户的uid
// var uid=req.session.uid;
// // 2：如果没有 uid -2
// if(!uid){
//    res.send({code:-2,msg:"请登录"})
//    return;
// }
// // 3.获取参数 ids
// var ids=req.query.ids;
// console.log(ids)
// // 4.创建sql语句
// var sql = `delete from xz_cart where id in (${ids})`
// //5.创建sql语句
// //sql : DELETE FROM xz_cart WHERE id IN (?)
// pool.query(sql,(err,result)=>{
//   if(err) throw err;
//   result.affectedRows>0?res.send({code:1,msg:"删除成功"}):res.send({code:-1,msg:"删除失败"}) 
// })   
// //测试：http://127.0.0.1:3000/delm?lid=2,5
// //http://127.0.0.1:3000/login?uname=tom&upwd=123
// //http://127.0.0.1:3000/delm?ids=15,16  
// })





// //#检测
// //1:启动服务器 node app.js
// //2:打开浏览器在址栏
// //http://127.0.0.1:3000/login?uname=t&upwd=1
// //http://127.0.0.1:3000/login?uname=tom&upwd=123




//使用express构建web服务器 --11:25
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
var index=require("./routes/index");
var user=require("./routes/user");
var detalis=require("./routes/detalis");
var birthdayCart=require("./routes/birthdayCart");
// var details=require("./routes/details");
// var products=require("./routes/products");
// var users=require("./routes/users");

//构建web服务器
var app = express();
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:8080"],
  credentials:true
}))
app.listen(5050);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/user",user);
app.use("/detalis",detalis)
app.use("/birthdayCart",birthdayCart)
// app.use("/details",details);
// app.use("/products",products);
// app.use("/users",users);








