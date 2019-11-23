<template>
<div class='container'>
  <div>
   <mt-tabbar fixed>
        <mt-tab-item>
        <!--按钮-->
          <div class="img_box">
           <img src="../../assets/img/head_footer/menu_home.png" alt="" slot='icon' @click="change">
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
    <mt-nav v-show="boolean" class="show"></mt-nav>
</div>

</template>

<script>
import nav from "../gongYong/nav"
   export default{
      data(){
         return {
           active:'tab1',
           bool:true,
           boolean:false
         }
      },
      components:{
        "mt-nav":nav
      },
      methods:{
        
           change(e){
          var mig=e.target
            if(this.bool){
              mig.src='../../../imgs/other_img/delete_ico.png';
              this.bool=false
              this.boolean=true
              }
          else{
            mig.src='img/menu_home.a3d00679.png';
            this.bool=true
            this.boolean=false

       }
      }
    }
  }
</script>
<style scoped>

.show{
  margin-top:2.8125rem;
}
mt-tabbar >mt-tab-item{
  width: 33.3%;
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
   height:50px;
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
.img_box{
     margin-left: 25px;
  width: 1.875rem;
  height: 1.875rem;
}
.img_box img{
  width: 80%;
  height: 80%;
}
.container{
  position: relative;
  /* z-index: 19999; */
}
</style>