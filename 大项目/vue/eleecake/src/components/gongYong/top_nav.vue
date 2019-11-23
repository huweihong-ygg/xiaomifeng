<template>
  <div class='container'>
    <ul class='cateGrate'>
      <li>
        <router-link to="/detalis">
          <img src="../../assets/img/head_footer/menu_1.jpg" alt="">
          <span>蛋糕</span>
        </router-link>
       </li> 
       <li>
    <router-link to="/detalis">
          <img src="../../assets/img/head_footer/ico_xwc.jpg" alt="">
          <span>咖啡下午茶</span>
        </router-link>
       </li> 
       <li>
        <router-link to="">
          <img src="../../assets/img/head_footer/pg.jpg" alt="">
          <span>送全国</span>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <img src="../../assets/img/head_footer/menu_3.jpg" alt="">
          <span>个人中心</span>
        </router-link>
      </li>
    </ul>
  </div> 
</template> 
<style scoped>
.container{
 border-top: 1px solid #eee
}
.cateGrate{
    display:flex;
    justify-content:spacing-around;
  border-top: 2px solid #eee;
  border-bottom: 1px solid #eee;

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