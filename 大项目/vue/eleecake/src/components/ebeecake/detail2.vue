<template>
  <div>
    <myheader></myheader>

    <div class='imglb' v-cloak>
      <mt-swipe :auto="3000">
          <mt-swipe-item  v-for='(p,i) of imgslb' :key='i' id='lunbo'>
            <img :src="`http://127.0.0.1:5050/${imgslb[i]}`" alt="">   
          </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class='cake'>
      <div class='detailInfo'>
       <div>
         <div class='name'>{{pname}}</div>
        </div>
        <div  class='more_size' @click='popup'>{{changdu}}厘米 | 更多规格</div>
      </div>
      <div class='pro'>
        <span>蜜度</span>
        <span id='midu'>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div class='pro'>
        <span >芝度</span>
        <span id='zhidu'>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div class='canju'>
        <span>{{changdu}}厘米 | 适合{{people}}人食用 ｜ {{tools}}套餐具</span>
      </div>
      <div class='price'>¥{{price}}</div>
    </div>

  <!--底下详情模块-->
    <div class='bigImage'>  
        <div v-for="(item,i ) of bigImgs" style='width:100%;' class='box' :key="i">
          <img   class='imgInbox' src="http://127.0.0.1:5050/img/cakes/loading_02.gif"  :data-origin='axios.defaults.baseURL+item.pic' >
        </div>    
    </div>

    <!--热销爆款-->
    <div class='hots'>
      <h2 class='hot'>热销爆款</h2>
      <div class='goods'>
        <div class='good' v-for='(hot,i) of hotCakes' :key="i">
            <div>
              <a href='javascript:;'><img :src="axios.defaults.baseURL+hot.pic" alt=""></a>
            </div>
            <p>{{hot.pname}}</p>
        </div>
     </div>   
    </div>

  <!--商品评论模块 -->

   <div class='comments'>
        <div  class='title'>商品评价</div>
        <div  class = "commentInfo">
            <span>好评度98%</span>
            <span class='commentNum'>152次评价</span>
        </div>
         <!--评价模块-->
        <div class='allCom'>
           <div class='oneJP' v-for='(item,i) of  pingjias' :key='i'>
             <div class='user-time'>
                <span class='uname'>{{item.uname}}</span>
                <span class='pjtime'>{{dateFormat(new  Date(item.pingluntime))}}</span>
             </div>
             <div class='proBox'>
               <div class='pro'>
                  <span class='xuanxian'>口感</span>
                  <span :data-kougan='item.taste' class='kougan'>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
                <div class='pro'>
                  <span class='xuanxian'>配送</span>
                  <span :data-peisong='item.peisong' class='peisong'>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
                <div class='pro'>
                  <span class='xuanxian'>包装</span>
                  <span :data-pack='item.pack'  class='pack'>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
                <p class='pjcontent'>{{item.content}}</p>
             </div>
           </div>
        </div> 

        <div class='more' @click='loadPj'>{{seemore}}</div>
        
   </div>

   <!--弹框-->
    <div class='popup'>
      <mt-popup
        :visible.sync="popupVisible"  v-model='popupVisible'  modal='false'
        position="bottom">
         <div class='content'>
            <div class='top'>
              <div>{{pname}}</div>
              <div class='times' @click='closePop'>X</div>
            </div>
            <div class='detail'>
                <div class='left'>
                  <img :src="guigeImg" alt="">
                </div>
               <div class='right'>
                  <div>
                    <img src="../../../public/img/sizes25.png" alt=""><span>{{weights}}磅</span>
                  </div>
                  <div>
                    <img src="../../../public/img/covers25.png" alt=""><span>{{tools}}套餐具</span>
                  </div>
                  <div>
                    <img src="../../../public/img/numbers25.png" alt=""><span>适合{{people}}人食用</span>
                  </div>
                  <div>
                    <img src="../../../public/img/times25.png" alt=""><span>最早{{sendTime}}开始配送</span>
                  </div>
                    <div class='priceLength'>
                      <span> ¥{{price}}/</span><span>{{changdu}}cm</span>
                  </div>
               </div>
            </div>
         </div>

         <div class='guige' id='guige' @click.stop='changeGuige'>
            <div v-for="(item,i) of guiges" :key='i' :data-index="i" class='changdu'>{{item.changdu}}厘米</div> 
         </div>

         <div style='width:100%;height:100px;'></div>
      </mt-popup>
    </div>


   <!--底部模块-->

    <div class='whiteblock'>
      <div class='zixun' :class='showOrhide'>
      </div>
      <div class='bottom' @click="addCart">
        加入购物袋
      </div>
      <div class='toTop'  :class='toTopifHide'  @click='toTop'><a href='#' ></a></div>
    </div>


  </div>
</template>
<script>
  import myheader  from  '../gongYong/header.vue'
  export default{
    props:["pid"],
    data(){
      return {
        imgslb:[],
        midu:0,
        zhidu:0,
        pname:'',
        changdu:0,
        people:0,
        tools:0,
        price:0,
        weights:0,
        sendTime:0,
        popupVisible:false,
        //guize:{bg:false}
        guiges:[],
        guigeImg:'',
        showOrhide:{showhide:false},
        bigImgs:[],
        toTopifHide:{ifHide:true},
        pingjias:[],
        pageNumber:0,
        totalCount:120,
        seemore:'查看更多',
        hotCakes:[],
        counts:1,
        load:{lazyLoad:false},
        pic:''
      } 
    },
    components:{
      myheader
    },
    methods:{
      addCart(){
         var url  = 'user/addcart';
         var pid  = this.pid;
         var price = this.price;
         var changdu = this.changdu;
         var peolples = this.people;
         var arr = peolples.split("-");
         var lowerPeople = arr[0];
         var upperPeople = arr[1];
         var counts = this.counts;
         console.log(peolples);
         var tools = this.tools;
         var title = this.pname;
         var pic= this.pic;
         var params = {pid,price,changdu,tools,lowerPeople,upperPeople,counts,title,pic};
         this.axios.get(url,{params}).then(res=>{
            console.log(res);
           if(res.data.code==-1){
                this.$messagebox.confirm("您还没有登录,是否去登录")
                  .then(res=>{
                      this.$router.push('/login');
                  }).catch(err=>console.log(err));       
            }else{
              console.log(res);
            }
         })
      },
      dateFormat(date){
         var  month = date.getMonth() +1;
         var  second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
         var  dateStr = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+second;
         return dateStr;
      },
      closePop(){
        this.popupVisible=!this.popupVisible;
  
      },
      popup(){
        this.popupVisible=!this.popupVisible;
      
      },
      loadImgs(){
         var url  = 'user/imgs';
         var cid = this.pid;
         console.log(cid);
         var params = {cid};
         this.axios.get(url,{params}).then(res=>{
           console.log(res.data);
           var imgs;
           imgs = res.data.data[0]; //获取对应的图片
           this.imgslb.push(imgs.lunbo1);
           this.imgslb.push(imgs.lunbo2);
           this.imgslb.push(imgs.lunbo2);   
           this.pic = imgs.lunbo1;
         })
      },
      loadBigImgs(){
         var url  = 'user/bigimgs';
         var cid =this.pid;
         var params = {cid};
         this.axios.get(url,{params}).then(res=>{
            this.bigImgs = res.data.slice();
         })
      },
      loadCake(){
         var url  = 'index/cake';
         var pid =this.pid;
         var params = {pid};
         this.axios.get(url,{params}).then(res=>{
            this.midu = res.data[0].midu;
            this.zhidu = res.data[0].zhi;
            this.pname = res.data[0].pname;    
         })
      },
      loadPj(){
        console.log('see  more');   
        var url='user/pingjias';
        var sp_id =this.pid;
        ++this.pageNumber;
        var pno = this.pageNumber;
        var params={sp_id,pno};
      
      
        if(this.pageNumber<=this.totalCount){
            this.axios.get(url,{params}).then(res=>{
              this.pingjias=[].concat(this.pingjias,res.data.data);
              this.totalCount =res.data.pageCount; 
              var len = this.pingjias.length;
              for(var i=0;i<len;i++){
              // console.log(this.pingjias[i].uname);
                var arr  = this.pingjias[i].uname.split('');
                arr.splice(arr.length-4,4,'*','*','*','*');
                this.pingjias[i].uname=arr.join('');   
              }
              if(this.pageNumber==this.totalCount){
                  this.seemore='亲,没有更多了哦';
              }
          })
        } 
      },
      loadGuige(){ //获取蛋糕的规格数据
         var url  = 'user/size';
         var cid =this.pid;
         var params = {cid};
         this.axios.get(url,{params}).then(res=>{ 
           // console.log('guize');  

            var data = res.data.data;
            console.log(res.data);
         
            this.guiges = data;
            this.price = data[0].price;//
            this.people = data[0].peolples;
            this.tools = data[0].tools;
            this.changdu = data[0].changdu;
            this.price =  data[0].price;
            this.weights =  data[0].weights;
            this.sendTime = data[0].send_time;
            this.guigeImg = this.axios.defaults.baseURL+data[0].pic;
         })
      },
      loadHot(){
        var url ='detalis/Popularity';
         this.axios.get(url).then(res=>{ 
              //hotCakes
              this.hotCakes = res.data;
              console.log(this.hotCakes);
         })   
      },
      changeGuige(e){
            window.event? window.event.cancelBubble = true : event.stopPropagation()
           // e.stopPropagation();  //阻止冒泡无效
            var  thisDiv = e.target;
            if($(thisDiv).is('.changdu')){ 
             //需要在加判断条件
               var index  = thisDiv.dataset.index;
               console.log(index);
               $(thisDiv).addClass('bg');   
               $(thisDiv).siblings().removeClass('bg');   
               this.price = this.guiges[index].price;
               this.people = this.guiges[index].peolples;
               this.tools = this.guiges[index].tools;
               this.changdu = this.guiges[index].changdu;
               this.weights =  this.guiges[index].weights;
               this.sendTime = this.guiges[index].send_time;
               this.guigeImg = this.axios.defaults.baseURL+this.guiges[index].pic;
            } 

      },
      indicators(){
         $('#midu').children().slice(0,this.midu).css('backgroundColor','#fabe00');
         $('#zhidu').children().slice(0,this.zhidu).css('backgroundColor','#fabe00');
            var  spanKougan = document.getElementsByClassName('kougan');
            var  peisong = document.getElementsByClassName('peisong');
            var  pack = document.getElementsByClassName('pack');
            
            for(var i=0;i<spanKougan.length;i++){
              
               $(spanKougan[i]).children().slice(0,spanKougan[i].dataset.kougan).css('backgroundColor','#fabe00');
            }
            for(var i=0;i<peisong.length;i++){
            
               $(peisong[i]).children().slice(0,peisong[i].dataset.peisong).css('backgroundColor','#fabe00');
            }
            for(var i=0;i<pack.length;i++){
            
               $(pack[i]).children().slice(0,pack[i].dataset.pack).css('backgroundColor','#fabe00');
            }
      },
      loadImg(arr){
           for(var i=0;i<arr.length;i++){ 
             if(isInViewPortOfOne(arr[i])&& !arr[i].isLoad){
               //if($(arr[i]).getElementTop()<document.documentElement.clientHeight && !arr[i].isLoad ){
                // console.log('hello',arr[i].getBoundingClientRect().top,document.documentElement.clientHeight);
              //   console.log('满足要求');
                  arr[i].isLoad = true;
                  if( arr[i].dataset.origin){
                      this.load.lazyLoad= true;
                      arr[i].src = arr[i].dataset.origin;

                  }else{
                      this.load.lazyLoad= true;
                      arr[i].src = arr[i].getAttribute('data-origin');
                  }   
                 arr[i].style.cssText='opacity:0.8;transition:opacity 2s;' ;        
            }
          }

         // var num = document.getElementsByTagName('img').length;
         // var img = document.getElementsByTagName("img");
          // var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
          // lazyload(); //页面载入完毕加载可是区域内的图片
          // //window.onscroll = lazyload;
          // function lazyload() { //监听页面滚动事件
          //     var seeHeight = document.documentElement.clientHeight; //可见区域高度
          //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
           
          //     for (var i = n; i < img.length; i++) {
          //             //console.log($(img[i]).offset().top,seeHeight,scrollTop);
          //         if (img[i].offsetTop < seeHeight + scrollTop) {
                      
          //             if (img[i].getAttribute("src") == "http://127.0.0.1:5050/img/cakes/loading_02.gif") {
          //                 img[i].src = img[i].getAttribute("data-origin");
          //             }
          //             n = i + 1;
          //         }
          //     }
          // }
      },
      lazyLoad(){
        var box = document.getElementsByClassName('box');
        var imgs = document.getElementsByClassName('imgInbox');
        this.loadImg(imgs);
      },
      toTop(){
        if(document.documentElement.scrollTop){
          
           document.documentElement.scrollTop = 0;
        }else{
          
           document.body.scrollTop=0;
        }
      },
      test1(){
        var that = this;
        window.onscroll=function(){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
          that.lazyLoad();//拉动的时候也得刷新
          //console.log(scrollTop);
          if(scrollTop>=1000){
             that.toTopifHide.ifHide = false;
          }else{
             that.toTopifHide.ifHide = true;
          }      
        }
      }
    },
    created(){ 
        this.loadBigImgs();
        this.loadImgs();
        this.loadCake();
        this.loadGuige();  
        this.test1();  //设置滚动事件的监听事件
        this.loadPj();
        this.loadHot();
      
    },
    beforeUpdate() { //改变dom元素的颜色要放在beforeUpdate()钩子函数之前
      this.indicators();
      this.lazyLoad();        
    },
    updated() {
       this.indicators();
    },
    watch:{
        $route(){
           this.loadBigImgs();
           this.loadImgs();
           this.loadCake();
           this.loadGuige();  
           this.loadPj();
           this.loadHot();
        }
    }
  }
</script>
<style scoped>

.lazyLoad{
    opacity:1;
    transition:opacity 2s;
}
.goods{
    display:flex;
    flex-wrap:wrap;
    color:#3c2314 ;
    font:12px sans-serif; 
}
.goods .good{
    width:50%;
}
.good div{
   text-align:center;
   height:135px
}
.good  img{
   width:100%;
}
.good p{
    margin-top: 0.13rem;
    margin: 0.13rem 0.3rem;
    border: 1px solid #e7e7e7;
    height: 0.74rem;
    line-height: 0.7rem;
    text-align:center;
    padding:0.5rem;
}
.hot{
    font-size: 15px ;
    color:#3c2314;
    text-align: center;
    font-weight: bold;
    background:#fcf6e5;
    padding:0.58rem;
}
.pjcontent{
   margin-top:1rem;
   font-size:12px;
}
.xuanxian{
   color:#aaa;
}
.oneJP{
   padding-top:1rem;
   border-top:1px solid #e9e9e9;
}
.user-time{
   display:flex;
   justify-content:space-between;
}
  .pjtime{
    color:#aaa;
    font-size:12px;
  }
.commentInfo{
  color:#aa8764;
  margin-bottom:0.5rem;
  font:10px;
  margin-bottom:1rem; 
}
.comments{
   margin:4.5rem 1rem;
   color:#3c2314 ;
   font:14px sans-serif;
   margin-bottom:6rem;
}
.commentNum{
  float:right;
}
.title{
  font:14px;
  margin-bottom:0.5rem;
}
.bigImage img{
   width:100% !important;
}
.ifHide{
   display:none;
}
.showhide{
   display:none;
}
.top{
  display:flex;
  justify-content:space-between;
}
.top .times{
  font-size:18px;
  margin-right:10px;
}

.popup>div{
  width:100%;
  color:#000;
}

.detail{
  display:flex;
}
.detail .left ,.detail .right{
  width:50%;
}
.detail .left>img{
  width:100%;
}
.detail .right{
  color:#3c2314;
  font:12px sans-serif;
}
.detail .right div{
  margin-bottom:6px;
}
.detail .right img{
  vertical-align:middle;
}
.content>div:first-child{
  margin-top:1rem;
  margin-left:1rem;
  margin-bottom:1rem;
  color:#3c2314;
  font:16px sans-serif;

}
.content{
  color:#3c2314;
  font:12px sans-serif;
}
.priceLength>span:first-child{
   font-size:20px;
}
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
.popup  .guige{
   margin-left:4%;
   width:92%;
   display:flex;
   flex-wrap:wrap;
   margin-top:1rem;
}
.popup  .guige>div{
  width:21%;
  margin-right:2%;
  text-align:center;
  height: 1.6rem;
  border: 1px solid #ceb18e;
  cursor: pointer;
  color:#3c2314;
  font:12px sans-serif;
  margin-bottom:6px;
  box-sizing:border-box !important;
  padding-top:0.26rem;
}

.bg{
   
    background: url(../../../public/img/selected.png) no-repeat;
    background-position: bottom right;
     border: 2px solid  #ceb18e !important;
}

[cloak]{
  display:none;
}
.imglb{
    height:268px;
    width:100%;
}
 #lunbo img{
    width:100%;
    height:100%;
 }
 .cake{
    margin:2rem 1rem;
    color: #3C2314;
    font:12px sans-serif;
 }
 .detailInfo{
   display:flex;
   justify-content:space-between;
   margin-bottom:1rem;
   padding-left:0;
   padding-right:0;
   width: 100%;
    padding-top: 0.733333rem;
    font:12px sans-serif;
 }
 .name{
    color:#3c2314;
    font-size: 0.533333rem;
    font:18px sans-serif;
 }
.more_size{
    border:1px solid #ddd;
    color:#3c2314;
    font:12px sans-serif;
    padding:5px 8px;
    margin-right:0px;
}
.proBox{
  padding-top:0.8rem;
  padding-bottom:1rem;
}
.pro{
    color:#3c2314;
    font:12px sans-serif;
    margin-bottom:0.5rem;
}
.pro i{
    display: inline-block;
    height: 0.54rem;
    width: 0.54rem;
    margin-right: 0.07rem;
    border-radius:50%;
    background:#ddd;;
}
.pro span{
   padding-right:0.5rem;
}
.canju{
  margin-top:1.4rem;
  margin-bottom:0.5rem;
}
.price{
  color:#AA8764;
  font-size:20px;
}
.whiteblock{
  width:100%;
  height:60px;
  background:#fff;
  position:fixed;
  bottom:0;
  left:0;
  z-index:3000 
}
.peisong{
  padding-left:0rem;
}
.more{
  text-align:center;
  color:#AA8764;
}
.imgInbox{
  opacity:0;
  height:256px;
}
</style>  