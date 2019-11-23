<template>
   <div id="fixed">
    <ul class="list-unstyled justify-content-around" id="z_dex">
      <li>
        <router-link to="/">
          <img src="../../../public/imgs/nav/menu_1.jpg" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/detalis">
          <img src="../../../public/imgs/nav/menu_2.jpg" alt="">
          <p>蛋糕</p>
        </router-link>
      </li> 
      <li>
        <router-link to="/topUp">
          <img src="../../../public/imgs/nav/menu_3.jpg" alt="">
          <p>充值返利</p>
        </router-link>
      </li> 
      <li>
        <router-link to="/trcyeat">
          <img src="../../../public/imgs/nav/menu_4.jpg" alt="">
          <p>试吃申请</p>
        </router-link>
      </li> 
      <li>
        <router-link to="/login">
          <img src="../../../public/imgs/nav/menu_5.jpg" alt="">
          <p>个人中心</p>
        </router-link>
      </li> 
    </ul> 
    </div>

</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.list-unstyled{
  text-align: center;
}
  img{
    width:55%;
  }
  p{
    font-size:12px;
    color:#3C2314;
  }
  ul{
    display:flex;
  }
   #z_dex{
    /* position:absolute; */
    background: #fff;
    border-bottom:1px solid #ddd;
    border-top:1px solid #ddd;
    z-index: 999;
    padding: 3px 0
}
#fixed{
  position:fixed;
  /* border-top: 1px solid #ccc; */
  z-index: 9999;
  
}
</style>