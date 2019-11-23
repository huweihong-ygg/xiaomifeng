<template>
  <div class='container'>
    <ul class='cateGrate'>
      <li>
        <a href="javascript:;" @click="s1()">
          <img src="../../assets/img/head_footer/ico_ny.jpg" alt="">
          <span>奶油蛋糕</span>
        </a> 
       </li> 
       <li>
        <a href="javascript:;" @click="s1()">
          <img src="../../assets/img/head_footer/ico_xwc.jpg" alt="">
          <span>咖啡下午茶</span>
        </a>
       </li> 
       <li>
        <a href="javascript:;" @click="s2()">
          <img src="../../assets/img/head_footer/ico_bjl.jpg" alt="">
          <span>冰激凌蛋糕</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="s3()">
          <img src="../../assets/img/head_footer/ico_zs.jpg" alt="">
          <span>芝士蛋糕</span>
        </a>
      </li>
    </ul>
     <ul class='cateGrate'>
      <li>
        <a href="javascript:;">
          <img src="../../assets/img/head_footer/ico_sr.jpg" alt="">
          <span>注册领券</span>
        </a> 
       </li> 
       <li>
        <a href="javascript:;" @click="s5()">
          <img src="../../assets/img/head_footer/ico_qkl.jpg" alt="">
          <span>巧克力蛋糕</span>
        </a>
       </li> 
       <li>
        <a href="javascript:;" @click="s6()">
          <img src="../../assets/img/head_footer/ico_rq.jpg" alt="">
          <span>人气热销</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" @click="s7()">
          <img src="../../assets/img/head_footer/ico_hp.jpg" alt="">
          <span>好评优选</span>
        </a>
      </li>
    </ul>
  </div> 
</template> 
<style scoped>
  .cateGrate{
    display:flex;
    justify-content:spacing-around;
  }
  ul{
    display:flex;
  }
   .cateGrate a img{
     width:48px;height:48px;
   }
   ul li{
     display:flex;
     flex-direction:column;
     display: inline-block;
     margin: 0.16rem auto 0.16rem auto;
     padding: 0;
     text-align:center;
   }
   ul{
     margin-bottom:0.16rem;
   }
   span{
     font-size:12px;
   }
   a{
      display:flex;
      flex-direction:column;
      align-items:center;
   }
</style>

<script>
export default {
 data(){
   return{

   }
 },
 methods:{
   scroll(){
     window.onscroll=function(){
       var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
        // console.log(scrollTop)
     }
     
   },
 
  s1(){
    console.log("1")
  document.getElementById("t1").scrollIntoView()   
  },
    s2(){
    console.log("1")
  document.getElementById("t2").scrollIntoView()   
  },
    s3(){
    console.log("1")
  document.getElementById("t3").scrollIntoView()   
  },
    s5(){
    console.log("1")
  document.getElementById("t4").scrollIntoView()   
  },
    s6(){
    console.log("1")
  document.getElementById("t5").scrollIntoView()   
  },
   s7(){
    console.log("1")
  document.getElementById("t6").scrollIntoView()   
  },

  },
 created(){
   this.scroll()
 }

 
}
</script>

