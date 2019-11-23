


<template>
<div>
   <div class="code">
        <div class="yanz">
            <span>验证码：</span>
            <input type="text" value="" placeholder="请输入图片验证码" class="input-val">
            <canvas id="canvas" width="100" height="30"></canvas>
        </div> 
        <!-- button  btn -->
   </div>
 </div>  
</template>

<script>
export default {
    data(){
        return{
            
        }
      
    },
    props:["phone"],
  methods: { 
  yanzhen(){
            $(function(){
  var show_num = [];
  draw(show_num);
  $("#canvas").on('click',function(){
   draw(show_num);
  })
  $(".btn").on('click',function(){
   var val = $(".input-val").val().toLowerCase();
   var num = show_num.join("");
   if(val==''){
    alert('请输入验证码');
   }else if(val == num){
    // alert('验证码输入正确');
    // 先验证图片验证码，再验证其他表单内容是否正确，再发送axios请求
    //   var phoneValue=parseInt(this.getAttribute("phone"));
    //     var reg=/^1[3-9]\d{9}$/
    //      if(reg.test(phoneValue)){
    //      }else{
    //      alert("手机号输入有误")
    //      }    

    $(".input-val").val('');
    draw(show_num);
   }else{
    alert('验证码错误！请重新输入！');
    $(".input-val").val('');
    // draw(show_num);
   }
  })
 
 })


function draw(show_num) {
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
}
</script>

<style>
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
  



