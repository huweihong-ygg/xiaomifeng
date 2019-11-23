<template>
    <div>
 <div class="headerWrap">
    <div class="header">
        <div class="topBar subBar">
            <a href="javascript:history.back();" class="leftIcon back">
                <van-icon name="arrow-left" size="1.2rem" color="#3C2314"/>
                </a>
            <p class="title">新会员注册</p>
        </div>
    </div>
  </div>
 <div class="input_box">
        <van-cell-group>
        <van-field v-model="username"   clearable  label="用户名："
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$messagebox('提示',' 用户名由3—6位字母或汉字组成')"
        />
        <van-field v-model="phone"  clearable  type="text" label="手机号："
            placeholder="请输入11位手机号"      
        />
        <van-field v-model="password" clearable type="password"  label="密码："
            placeholder="请输入密码"
        />
        <van-field v-model="agin_password" clearable  type="password" label="确认密码："
            placeholder="请再次输入密码" 
        />
        </van-cell-group>
    </div>   
   <!-- ↓canvas图片验证码 -->
      <div class="code">
        <div class="yanz">
            <span>验证码：</span>
            <input type="text" value="" placeholder="请输入图片验证码" class="input-val" v-model="tuxing">
            <canvas id="canvas" width="100" height="30" ></canvas>
        </div> 
        <!-- button  btn -->
   </div>
   <button class="btn" @click="reg">提交</button>
     <div class="goto_denlv">
        <div><router-link to="/login">已有账号，立即登录</router-link>  </div><div>会员权益>></div>
     </div>
   <!-- 尾部 -->
     <mt-footer class="footer"></mt-footer>
    </div>
</template>
<script>
//import $ from 'jquery'
//import canvas from '../gongYong/canvas'
import footer from '../gongYong/footer'
export default {
    data(){
        return{
            username:"",
            password:"",
            agin_password:"",
            phone:'',
            show_num:[],
            tuxing:""
        }
    },
     methods: {
         reg(){
             console.log(this.show_num);
             var url="user/seluser"
             var url1="user/reguser"
             var obj1={uname:this.username,upwd:this.password,phone:this.phone}
             var obj={uname:this.username}
             var reg=/^1[3-9]\d{9}$/;
             var reg2=/^[\w]{8,12}$/;
            
            if(!this.username){
               this.$messagebox("提示","请输入用户名");
               return; 
            }
            if(!reg2.test(this.username)){
               this.$messagebox("提示","用户名必须由8-12位的数字和字母组成");
               return;
            }
            if(!this.phone){
               this.$messagebox("提示","请输入手机号");
               return; 
            }
            if(reg.test(this.phone)!=true){
                this.$messagebox("提示","手机号码格式有误") 
                return;      
            }
            if(!this.password){
                this.$messagebox("提示","密码不能为空") 
                return;  
            }
            if(this.password!==this.agin_password || this.password==""){
                this.$messagebox("提示","两次密码输入不一致")
                return;
            }  
            if(!this.tuxing){
                this.$messagebox("提示","请输入验证码")
                return;
            }
            if(this.tuxing.toLowerCase()!=this.show_num.join('')){
                 this.$messagebox("提示","验证码输入错误")
                 return;
            }         
            this.axios.get(url,{params:obj})
             .then(res=>{
               if(res.data.code==1){
                   this.$messagebox("提示","用户名已被注册")
                   return;
               }else{
                  this.axios.get(url1,{params:obj1})
                  .then(res=>{
                     if(res.data.code==1){
                       this.$messagebox("提示","注册成功")
                        //    console.log(this.show_num)
                        this.$router.push("/login")
                    }else{
                     this.$messagebox("提示","信息输入有误")
                     return;
                    }
               }) 
            }
         })
     },
     yanzhen(){
            var  that = this;
            $(function(){
            //var show_num = [];
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

   }
 },
    created() {
        this.yanzhen()
    },

   components:{
     //   "yzm-canvas":canvas,
        "mt-footer":footer
    }
}
</script>

<style  scoped>
.headerWrap {
    height:3rem;
    }
.headerWrap .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    background-color: #ffffff;
}
.headerWrap .topBar {
    background: #fff;
    height: 3rem;
    line-height: 3rem;
    position: relative;
    border-bottom: 1px solid #e9e9e9;
}
.headerWrap .topBar .leftIcon {
    float: left;
    margin-top:5px;
    margin-left: 0.333333rem;
}
.subBar .title {
    text-align: center;
    font-size: .875rem;
}
.input_box>>>.van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    width: 90px;
    color: #3C2314;
}
.goto_denlv{
display: flex;
flex-wrap: nowrap;
justify-content: space-between;
font-size: .775rem;
margin-top: 2.45rem
}
.goto_denlv div:first-child{
    margin-left: 1.25rem
}
.goto_denlv div:last-child{
    margin-right: 1.9rem;
    color: #AA8764;
}
.footer{
    margin-top: 3.75rem;
}
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

.input-val {
    width: 200px;
    height: 32px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    }
    #canvas {
    vertical-align: middle;
    box-sizing: border-box;
    border: 1px solid rgb(144, 81, 42);
    cursor: pointer;
    }
    
   .code{
       font-size: .875rem;
       /* padding:.625rem 0;   */
   }
   .code span{
       padding-left: .925rem
   }
   .code input{
       border: 0;
       outline:0;
       padding-left: 2.45rem
   }
   .yanz{
       width: 100%;                                                                                              
       padding: .425rem 0;
       /* padding-bottom: 1.875rem; */
       border-top: 0.5px solid #eee;
       border-bottom: 1px solid #eee;
   }    
   .code canvas{
    float: right;
    /* margin-right: .625rem; */
   }   

</style>

