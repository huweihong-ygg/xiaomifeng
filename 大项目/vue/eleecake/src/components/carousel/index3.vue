<template>
  <div id="app">
   <mt-nav></mt-nav>

    <div id="img1">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m01.jpg" alt="">
    </div>
    <div id="img2">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m02.jpg" alt="">
    </div>
    <div id="img3">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m03.jpg" alt="">
    </div>
    <router-link to="/index4">
      <div id="img4">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m04.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img5">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m05.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img6">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m06.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img7">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m07.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img8">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m08.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img9">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m09.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img10">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m10.jpg" alt="">
      </div>
    </router-link>
    <router-link to="/index4">
      <div id="img11">
        <img class="img_w" src="../../../public/imgs/carousel/index3/m11.jpg" alt="">
      </div>
    </router-link>
    <div class="d-flex">
      <router-link to="/index4">
        <div id="img12_01">
          <img class="img_w" src="../../../public/imgs/carousel/index3/m12_01.jpg" alt="">
        </div>
      </router-link>
      <router-link to="/index4">
        <div id="img12_02">
          <img class="img_w" src="../../../public/imgs/carousel/index3/m12_02.jpg" alt="">
        </div>
      </router-link>
    </div>
    <div id="img13">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m13.jpg" alt="">
    </div>
    <div id="img14">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m14.jpg" alt="">
    </div>
    <div id="img15">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m15.jpg" alt="">
    </div>
    <div id="img16">
      <img class="img_w" src="../../../public/imgs/carousel/index3/m16.jpg" alt="">
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
    width:100%;height:263.5px;
    background:#a99;
  }
  #img2{
    width:100%;height:277px;
    background:#a88;
  }
  #img3{
    width:100%;height:95px;
    background:#a77;
  }
  #img4{
    width:100%;height:595px;
    background:#a66;
  }
  #img5{
    width:100%;height:558.5px;
    background:#a55;
  }
  #img6{
    width:100%;height:573px;
    background:#b99;
  }
  #img7{
    width:100%;height:582px;
    background:#b88;
  }
  #img8{
    width:100%;height:581.5px;
    background:#b77;
  }
  #img9{
    width:100%;height:575.5px;
    background:#b66;
  }
  #img10{
    width:100%;height:576px;
    background:#dcb;
  }
  #img11{
    width:100%;height:622.5px;
    background:#dc9;
  }
  #img12_01{
    width:100%;height:379.5px;
    background:#dc5;
  }
  #img12_02{
    width:100%;height:379.5px;
    background:#999;
  }
  .d-flex{display:flex}
  #img13{
    width:100%;height:379.5px;
    background:#d55;
  }
  #img14{
    width:100%;height:476.5px;
    background:#0cb;
  }
  #img15{
    width:100%;height:344px;
    background:#09b;
  }
  #img16{
    width:100%;height:292.5px;
    background:#098;
  }
  .img_w{width:100%;height: 100%;}
</style>