<template>
   <div class='whiteblock'>
      <router-link to="/demo">
      <div class='zixun'>
      </div>
      </router-link>
      <div class='toTop'  @click='toTop'><a href='#'></a></div>
    </div>
</template>
<script>
export default {
  data(){
      return {}
  },
  methods:{

      toTop(){
        if(document.documentElement.scrollTop){
          
           document.documentElement.scrollTop = 0;
        }else{
          
           document.body.scrollTop=0;
        }
      }
  }
}
</script>
<style scoped>
  .bottom{
   position:fixed;
   bottom:10px;
   text-align:center;
   color:#fff;
   background:#3c2314;
   font-size:12px;
   height: 2rem;
   line-height: 2rem;
   width:80%;
   left:10%;
   z-index:2600;
   opacity:1;
}
.zixun{
    position:fixed;
    bottom:10px;
    left:4px;
    border-radius: 50%;
    background: #F47F29 url(../../../public/img/module-bg-6.png) center center no-repeat;
    background-size: 44px;
    width:56px;
    height:56px;
    z-index:3001
}

.toTop{
   position:fixed;
   bottom:10px;
   right:4px;
   background: #666 url(../../../public/img/toTop.png) center center no-repeat;
   background-size: 66px;
   background-position:-36px 10px;
   width:40px;
   height:42px;
   z-index:2601;
}
</style>