<template> 
<div id="app">
  <mt-header></mt-header>
  <!-- <mt-nav v-show="bool" id="z_dex"></mt-nav> -->
<div class="pop">
<van-tabs v-model="activeName">
  <van-tab title="手机验证登录">
    <van-cell-group>
      <!-- 双向绑定电话 -->
      <van-field id="phones"
        v-model="phone"
        clearable
        label="手机号:"
        right-icon="question-o"
        placeholder="请输入手机号码"
        @click-right-icon="$messagebox('提示','用户名格式为3-6位汉字字母组成')"
      />
      <div>
        <!-- 双向绑定短信码 -->
         <van-field
        v-model="text"
        label="短信码:"
        placeholder="请输入短信验证码"  
      />
        <a class="send" href="javascript:;">发送验证码</a>
      </div>
      <div class="code">
        <div class="yanz">
            <span>验证码：</span>
            <input type="text" value="" placeholder="请输入图片验证码" class="input-val" v-model="tuxing">
            <canvas id="canvas" width="100" height="30" ></canvas>
        </div> 
        <!-- button  btn -->
   </div>
     <!-- 双向绑定phone触发事件将phone-->
    <button class="btn" @click="login" :phone="phone">提交</button> 
  <!-- 分页面板 -->
    </van-cell-group>
  </van-tab>
  <van-tab title="密码登录" class="mimalogin">
    <van-cell-group>
      <van-field
       v-model="username"
        clearable
        label="账号："
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$messagebox('提示','用户名格式为11位数字组成')"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码："
        placeholder="请输入密码"  
      />
    </van-cell-group>

    <mt-button class="login" @click="userlogin">登录</mt-button>
  </van-tab>
  <div class="float-right">
    <a href="javascript:;">忘记密码?</a>
    <router-link to="/reg">新会员注册领优惠券</router-link>
  </div>
</van-tabs>
 </div>
 <mt-footer class="mtop"></mt-footer>

</div>
</template>
<script>
import header from '../gongYong/header'
import footer from '../gongYong/footer'
// import canvas from '../gongYong/canvas_login'
// import nav from "../gongYong/nav"
export default {
  components:{
       "mt-header":header,
       "mt-footer":footer,
        // "mt-canvas":canvas,
        // "mt-nav":nav
  },
  data(){
    return{
      phone:"",
      verify:"",
      text:"", 
      //islogin:true,
      username:"",
      password:"",
      activeName: 'a',
      bool:false,
       tuxing:'',
      show_num:[]
    
    }
  },
 methods:{
     yanzhen(){
            var  that = this;
            $(function(){
            //var show_num = [];
            console.log(0);
                draw(that.show_num);
                $("#canvas").on('click',function(){
                    draw(that.show_num);
                })
           })

          function draw(show_num) {
                console.log(show_num);
                var canvas_width=$('#canvas').width();
                var canvas_height=$('#canvas').height();
                var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
                var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
                canvas.width = canvas_width;
                canvas.height = canvas_height;
                var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
                var aCode = sCode.split(",");
                var aLength = aCode.length;//获取到数组的长度
                for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
                    var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                    // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                    var deg = Math.random() - 0.5; //产生一个随机弧度
                    var txt = aCode[j];//得到随机的一个内容
                    show_num[i] = txt.toLowerCase();
                    var x = 10 + i * 20;//文字在canvas上的x坐标
                    var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                    context.font = "bold 23px 微软雅黑";
                    context.translate(x, y);
                    context.rotate(deg);
                    context.fillStyle = randomColor();
                    context.fillText(txt, 0, 0);
                    context.rotate(-deg);
                    context.translate(-x, -y);
                }
                //that.show_num=show_num;
                for (var i = 0; i <= 5; i++) { //验证码上显示线条
                    context.strokeStyle = randomColor();
                    context.beginPath();
                    context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                    context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                    context.stroke();
                }
                for (var i = 0; i <= 30; i++) { //验证码上显示小点
                    context.strokeStyle = randomColor();
                    context.beginPath();
                    var x = Math.random() * canvas_width;
                    var y = Math.random() * canvas_height;
                    context.moveTo(x, y);
                    context.lineTo(x + 1, y + 1);
                    context.stroke();
                }
        }
      //得到随机的颜色值
        function randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
       }
    },
    
    userlogin(){//用户名登录验证
       //动态获取页面上的用户名和密码
       //发送axios请求
       var url="user/userlogin";
       var obj={uname:this.username,upwd:this.password}
       this.axios.get(url,{params:obj})
       .then(res=>{
         if(res.data.code==1){
            this.$messagebox("提示","登录成功");
            this.$router.go(-1)
         }else{
            this.$messagebox("提示","用户名或密码错误");
         }
       }) 
    },
    login(){//手机号登录验证
      //获取信息
      var that = this;
        var reg=/^1[3-9]\d{9}$/;
         if(!reg.test(this.phone)){
             this.$messagebox("提示","手机格式不正确");
             return;
         }
         if(!this.tuxing){
            this.$messagebox("提示","请输入验证码");
            return;
         }
         if(this.show_num.join('')!==this.tuxing){
            this.$messagebox("提示","验证码输入不正确");
            return;
         }     
        var  url="user/loginphone"
        var  phone=this.phone;
        var  params={phone};
        this.axios.get(url,{params})
          .then(res=>{
            console.log(res.data)
            if(res.data.code==1){//接受返回的数据进行处理      
             this.$messagebox("登录成功").then(()=>{
                  this.$router.go(-1)
             })     
            }else if(res.data.code==0){
               this.$messagebox("手机号输入有误");
               return;
            }
          })
     } 
  },
  created() {
    this.yanzhen()
  },
}
</script>
<style scoped>
  #phones.van-field__control{
  width:100px;
}
  .mimalogin{
    padding-left:2px;
  }
  .login{
   width: 86% !important;
   background: #3C2314;
   margin-left:7%;
    
  }
  .van-tab{
      font-size:12px;
  }

  .pop>>>.van-tabs__line{
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    height:3px;width:50px;
    background-color:#C8B49B;
    border-radius: 3px;
    
  }
  .pop>>>.van-tab--active {
    color:#C8B49B;
  }
  .van-cell{
    color: #3C2314;
    font-size: 12px;
   
    padding: 10px 73px;
  }
  .van-cell{
     margin-left:-45px;
     padding: 10px 93px; 
     padding-right:10px;
  }
  .send{
    position:relative;
    color:#3C2314;
    font-size: 12px;
    float:right;
    margin-right:20px;
    margin-top: -32px; 

  }
  .van-cell__title .van-field__label{
    padding-left:0
  }
  .login_box{
    width: 100%;
    text-align: center;
  }
  .login{
    background:#3C2314;
    color:#FBF5DD;
    font-size:14px;
    width:340px;height:35px;
    border-radius:0;
    margin-top:40px;
    margin-bottom:20px;
  }
  .float-right{
    float:right;
    font-size:12px;
  }
  .float-right a{
    color:#3C2314;
    margin-right:25px;
  } 
 .pop{
   margin-bottom: 6.25rem;
 }
 .float-right{
   margin: 2rem 0 3rem; 
 }

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
 .btn {
    display: block;
    margin-top: 20px;
    height: 32px;
    width: 100px;
    font-size: 16px;
    color: #fff;
    background-color: #457adb;
    border: none;
  
    }

    .btn{
        display: block;
       text-align: center;
        width: 86%;
       height: 2.23rem;
       line-height: 0.933333rem;
       background-color: #3C2314;
       color: #FBF5DD;
       font-size: 0.373333rem;
       margin: 0 auto;
       margin-top: 1.875rem;
   }
    #canvas {
      vertical-align: middle;
      box-sizing: border-box;
      border: 1px solid rgb(144, 81, 42);
      cursor: pointer;
      margin-top:-0.45rem;
    }
    
   .code{
       font-size: 12px;
       padding:.1.5rem 0; 
   }
   .code span{
    padding-left: 48px;
    color:#3c2314;
   }
   .code input{
       border: 0;
       outline:0;
       padding-left: 2.6rem;
       width:134px;
   }
   .yanz{
       width: 100%;                                                                                              
       padding: 0.8rem 0;
       /* padding-bottom: 1.875rem; */
       border-top: 0.5px solid #eee;
       border-bottom: 1px solid #eee;
   }    
   .code canvas{
    float: right;
    /* margin-right: .625rem; */
   } 

</style>
