<template>
    <div class="main">

<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
<mt-header id="disable_height"></mt-header> 
<mt-topheader></mt-topheader>  
<div class="carousel_box">     
<mt-swipe :auto="4000" class="carousel">
  <mt-swipe-item class="p1"> <router-link to="/index1"><img :src="axios.defaults.baseURL+list[0]" alt=""></router-link> </mt-swipe-item>
  <mt-swipe-item class="p2"> <router-link to="/index2"><img :src="axios.defaults.baseURL+list[1]" alt=""></router-link> </mt-swipe-item>
  <mt-swipe-item class="p3"> <router-link to="/index3"><img :src="axios.defaults.baseURL+list[2]" alt=""></router-link> </mt-swipe-item>
  <mt-swipe-item class="p3"> <router-link to="/index4"><img :src="axios.defaults.baseURL+list[3]" alt=""></router-link> </mt-swipe-item>
</mt-swipe>
</div>
<div class="title_box">
  <div class="title_tuijian">
    <span>蛋糕推荐</span>
    <i></i>
    <a href="">更多</a>
  </div>
</div> 
<div class="overhidden">
 <ul class="tuijian_ul">
  <li v-for="(item,i) of recommand" :key="i">
    <div class="tuijian"> 
      <div class="img">
          <img :src="axios.defaults.baseURL+item.pic" alt="">
        </div>
        <div class="name">
        {{item.pname}}
      </div>
       <div class="price">
         ￥<span>{{item.lowest_price}}</span>起
       </div>
    </div>
  </li>
  
 </ul>
</div>

<!-- 第二个 -->
<div class="title_box birthday_box">
  <div class="title_tuijian birthday">
    <i></i>
    <span>庆生蛋糕</span>
    
    <a href="">更多</a>
  </div>
</div>
<div class="overhidden">
 <ul class="tuijian_ul">
  <li v-for="(item,i) of birthday" :key="i">
    <div class="tuijian"> 
      <div class="img">
          <img :src="axios.defaults.baseURL+item.pic" alt="">
        </div>
        <div class="name">
        {{item.pname}}
      </div>
       <div class="price">
         ￥<span>{{item.lowest_price}}</span>起
       </div>
    </div>
  </li>
 </ul>
</div>
 
<div class="itemsWrap">
  <div class="title_box food">
    <div class="title_tuijian">
      <span>精选食材</span>
        <i></i>
      <a href="">更多</a>
    </div>
  </div>
  <div class="itemBox1">
    <ul>
      <li v-for="(item,i) of Selected" :key="i">
        <a href="">
            <div class="imgbox">
              <img :src="axios.defaults.baseURL+item.img" alt="法国法芙娜巧克力">
            </div>  
            <div class="nameEng">{{item.jtitle}}</div>
            <div class="name">{{item.jsubtitle}}</div>
        </a>
      </li> 
    </ul>
  </div>
 
</div>

<mt-footer></mt-footer>


</van-pull-refresh>



<mt-bottoms></mt-bottoms>
    </div>
</template>
<style scoped>
.carousel_box{
height: 375px;
}
.carousel{
width: 100%;
height:23.4375rem;
}
.carousel img{
  width: 100%;
  height: 100%;
}
.title_tuijian{
  width: 100%;
  height:2rem;
  /* background: pink; */
  font-size: 0.9rem;
}
.title_box{
  width: 100%;
  height: 78px;
}
.title_tuijian{
  padding-left: 2rem;
  box-sizing: border-box;
  font-weight: bold;
  position: relative;
  top: 1rem;
}
.title_tuijian i{
  width: 28px;
  height: 28px;
  display: inline-block;
  background:url("../../../public/imgs/index_img/ico_3.png");
  background-repeat: no-repeat;
  background-size:100%; 
  margin-left: 0.8rem;
  position: relative;
  top: 0.4rem;

}
.birthday i{
    width: 28px;
    height: 28px;
    display: inline-block;
    background:url("../../../public/imgs/index_img/ico_1.png"); 
    background-repeat: no-repeat;
    background-size:100%; 
    margin-left: -0.6rem;
    margin-right: 0.6rem;
    position: relative;
    top: 0.4rem;
}
.food i{
    width: 28px;
    height: 28px;
    display: inline-block;
    background:url("../../../public/imgs/index_img/ico_2.png"); 
  background-repeat: no-repeat;
  background-size:100%; 
  margin-left: 0.7rem;
  position: relative;
  top: 0.4rem;
}
.food span{
  margin-left: -0.5rem;
}
.title_tuijian a{
  position: absolute;
  right:0.5rem;
  line-height: 32px;
  font-weight: normal;
};
.tuijian{
width: 100%;
height: 375px;
margin-top:5rem;
display: flex
}
.tuijian_ul{
  display:flex;
  overflow-x: auto;
  padding-bottom: 20px;
  flex-wrap: nowrap;
  transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);
}   
.tuijian_ul li:first-child{
  width: 163px;
  height: 165px;
  /* background: pink; */
}
.img img{
  width: 163px;
  height: 117px;
}
.name{
  width: 100%;
  height: 16px;
  text-align: center;
  font-size: 12px;
    color: #3C2314;
    letter-spacing: 0.02rem;
}
.price{
  font-size: 12px;
  letter-spacing: 0.02rem;
  color: #AA8764;
  text-align: center;
}
.overhidden{
  width: 100%;
  height: 165px;
  overflow: hidden;
}
.birthday_box{
  width: 100%;
  height: 68px;
}
.itemsWrap{
  margin-bottom:4rem;
}
.itemBox1,.itemsWrap{
 position: relative;
}
.itemBox1 ul{
 width: 100%;
 height: 484px;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;

}
.itemBox1 ul li{
  width: 158px;
  height: 207px;
}
.imgbox img{
  width: 100%;
}
.nameEng{
  position: relative;
  width: 114px;
  height: 35px;
  background: #fff;
  margin: 0 auto;
  margin-top:-11.8%;
  z-index: 99;
  font-size:12px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  color: #AA8764;
 border: 1px solid #e7e7e7;
}
.name{
 margin-top:2.07%;
}

</style>

<script>
import header from '../gongYong/header_index.vue'
import topheader from '../gongYong/top_nav.vue'
import footer from '../gongYong/footer.vue'
import bottom from '../gongYong/bottom_nav'
export default {
  data(){
    return{
       list:[],
       recommand:[],
       birthday:[],
       Selected:[], 
       count: 0,
      isLoading: false
    }
  },
  components:{
    "mt-header":header,
    "mt-topheader":topheader,
     "mt-footer":footer,
     "mt-bottoms":bottom,
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    loadMore(){
     var url="index/lunbo";
    this.axios.get(url)
      .then(res=>{
        // console.log(res.data)
        var list=res.data;
        // console.log(res.data[0].img)
        for(var item of list){
           this.list.push(item.img)
        }
        // console.log(this.list)
      })
    },
    tuijian(){
       var url="index/recommand";
       this.axios.get(url)
        .then(res=>{
          // console.log(res.data);
          var list=res.data;
          for(var item of list){
            this.recommand.push(item);
            // console.log(item);
            
          }
          // console.log(this.recommand)
        })
    },
   birth(){
       var url="index/birthday";
       this.axios.get(url)
        .then(res=>{
          // console.log(res.data);
          var list=res.data;
          for(var item of list){
            this.birthday.push(item);
            // console.log(item);
            
          }
          // console.log(this.birthday)
        })
    },
    ingredient(){
         var url="index/ingredient";
       this.axios.get(url)
        .then(res=>{
          var list=res.data;
          for(var item of list){
            this.Selected.push(item);
          }
        })
    }
  },
   created(){//页面加载前请求首页数据
         this.loadMore();
         this.tuijian();
         this.birth();
         this.ingredient();        
    }

}
</script>