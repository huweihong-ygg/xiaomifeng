<template>
  <div id="app">
   <mt-nav></mt-nav>

    <div id="img1">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m01.jpg" alt="">
    </div>
    <div id="img2">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m02.jpg" alt="">
    </div>
    <div id="img3">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m03.jpg" alt="">
    </div>
    <div id="img4">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m04.jpg" alt="">
    </div>
    <div id="img5">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m05.jpg" alt="">
    </div>
    <div id="img6">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m06.jpg" alt="">
    </div>
    <router-link to="/index3">
      <div id="img7">
        <img class="img_w" src="../../../public/imgs/carousel/index2/m07.jpg" alt="">
      </div>
    </router-link>
    <div id="img8">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m08.jpg" alt="">
    </div>
    <router-link to="/index3">
      <div id="img9">
        <img class="img_w" src="../../../public/imgs/carousel/index2/m09.jpg" alt="">
      </div>
    </router-link>
    <div id="img10">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m10.jpg" alt="">
    </div>
    <router-link to="/index3">
      <div id="img11">
        <img class="img_w" src="../../../public/imgs/carousel/index2/m11.jpg" alt="">
      </div>
    </router-link>
    <div id="img12">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m12.jpg" alt="">
    </div>
    <div id="img13">
      <img class="img_w" src="../../../public/imgs/carousel/index2/m13.jpg" alt="">
    </div>
  </div>
</template>
<script>
 import nav from  '../gongYong/nav'

export default {
    components:{
    "mt-nav":nav,
  },
}
</script>
<style scoped>
  #img1{
    width:100%;
    background:#a99;
  }
  #img2{
    width:100%;
    background:#a88;
  }
  #img3{
    width:100%;
    background:#a77;
  }
  #img4{
    width:100%;
    background:#a66;
  }
  #img5{
    width:100%;
    background:#a55;
  }
  #img6{
    width:100%;
    background:#b99;
  }
  #img7{
    width:100%;
    background:#b88;
  }
  #img8{
    width:100%;
    background:#b77;
  }
  #img9{
    width:100%;
    background:#b66;
  }
  #img10{
    width:100%;
    background:#dcb;
  }
  #img11{
    width:100%;
    background:#dc9;
  }
  #img12{
    width:100%;
    background:#dc5;
  }
  #img13{
    width:100%;height:414.5px;
    background:#d55;
  }
  .img_w{width:100%;height: 100%;}
</style>
