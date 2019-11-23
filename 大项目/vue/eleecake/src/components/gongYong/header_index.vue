<template>
<div class='container'>
   <mt-tabbar fixed>
        <mt-tab-item>
        <!--按钮-->
          <div class="mif_img">
          <img src="../../../public/imgs/index_img/ico_2.png" alt="" slot='icon'>
          </div>
        </mt-tab-item>
        <mt-tab-item>  
          <img src="../../assets/img/head_footer/logo_txt.png" alt="" id='logo' style='width:82.5px;height:13px'>
        </mt-tab-item>
        <mt-tab-item>  
          <img src="../../assets/img/head_footer/loc_ico.png" alt="">北京
          <router-link to="/bill">
            <img src="../../assets/img/head_footer/ico_cart.jpg" alt="" id='bag'>
            <span>{{$store.getters.getCartCount
}}</span>       
        </router-link>
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script>
   export default{
      data(){
         return {
           active:'tab1'
         }
      },
      methods:{

     }
   }
</script>
<style scoped>
.mif_img{
    padding-left:0.8rem; 
    width: 30px;
    height: 30px;
}
.mif_img img{
    width: 100%;
} 
.mint-tabbar{
  width: 100%;
  height: auto;
}
 .mint-tabbar.is-fixed{
    right: 0;
    top:0;
    left: 0;
    position: fixed;
    z-index: 1;
    height:50px;
    border-bottom:1px solid pink;
 }
 .container{
   width: 100%;
   height:3.125rem;
 }
 .logo{
   width:82.5px !important;
   height:13px !important;
 }
 .mint-tabbar > .mint-tab-item.is-selected {
    background-color: #fff;
    /* color: #26a2ff; */
    height:38px !important;
}
.container  #bag{
  width:30px;height:20px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  color:#000 !important;
}
.container span{
  display:inline-block;
  width:16px;
  height:16px;
  border-radius:50%;
  text-align:center;
  color:#fff;
  line-height:16px;
  background:#000;
  margin-left:-12px;
}
img {
    vertical-align: middle;
    border: none;
}
</style>