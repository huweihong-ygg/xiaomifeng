<template>
    <div>
        <mt-header></mt-header>
        <div class="kong"></div>
        <!-- 商品向卡 -->
        <div class="cartBox">
            <ul class="goods_wrap">
                <li class="goods_item" v-for="(item ,i) of carts" :key="i">
                    <div class="img">
                        <router-link to="">
                            <img :src="axios.defaults.baseURL+item.pic" alt="">
                        </router-link>
                    </div>
                    <div class="info">
                        <div class="op">
                            <p class="less" @click="num2($event,-1)" :data-index='i'></p>
                            <span class="number">{{item.counts}}</span>
                            <p class="more" @click="num2($event,1)" :data-index='i'></p>
                        </div>
                        <div class="name">{{item.title}}</div>
                        <div class="size">{{item.changdu}}厘米</div>
                        <div class="tips"><span>删除</span>适合{{item.lowerPeople}}-{{item.upperPeople}}人食用 | {{item.tools}}套餐具</div>
                        <div class="priceBox">
                            <span class="left">{{item.price}}/件</span>
                            <span class="right">￥{{item.price.toFixed(2)*item.counts}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="listBox" @click="aop">
            <div class="left">选购生日配件</div>
            <div class="right"> </div>
        </div>
        <div class="otherBox" :class="showclass">
            <ul>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
                <li>
                    <div class="left">
                        <router-link to="">
                            <img src="../../../public/imgs/bill_img/2268.jpg" alt="">
                        </router-link >
                    </div>
                    <div class="right">
                        <div class="title">鲜花</div>
                        <div class="op">+添加</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="itembox">
            配送
        </div>
        <div class="shipinfo">
           <mt-field label="订货人" placeholder="请填写您的姓名" v-model="username"></mt-field>
           <mt-field label="订货手机" placeholder="请填写您的手机号码" type="email" v-model="userphone"></mt-field>
           <mt-field label="收货人" placeholder="不是本人收货时请填写" type="password" v-model="consignee"></mt-field>
           <mt-field label="收货手机" placeholder="不是本人收货时请填写" type="tel" v-model="consigneephone"></mt-field>
           <div class="diz" @click="showPopup">
               <div class="listBox2">
               <div class="left">
                   城市
                   <span>{{province}}&nbsp;&nbsp;{{city}}&nbsp;&nbsp;{{area}}</span>
               </div>
               <div class="right"> </div>
                </div>
           </div>
           <div class="selected_box">
               <table></table>
               <router-link to="" class="selected">六环以内</router-link>
               <router-link to="" class="selected">六环以外</router-link>
            </div>
            <mt-field label="详细地址" placeholder="请输入详细地址" type="url" v-model="address"></mt-field>
        </div>
        <div class="diz" @click="showPopup2">
               <div class="listBox3">
               <div class="left">
                   配送时间
                   <span>{{peisongtime}}</span>
               </div>
               <div class="right"> </div>
                </div>        
        </div>
        <div class="itembox3">
            支付方式
        </div>
        <div class="selected_box2">
               <table></table>
               <router-link to="" class="selected">微信</router-link>
               <router-link to="" class="selected">支付宝</router-link>
               <router-link to="" class="selected">货到现金</router-link>
        </div>
        <div class="selected_box3">
               <table></table>
               <router-link to="" class="selected2">货到POS</router-link>
               <router-link to="" class="selected2">建行龙支付</router-link>
        </div>
        <div class="yhpanel">
            <div class="yhpanel1">
                推荐下单
            </div>
            <div class="yhpanel2">
                预存1000返100，首充再送50<br>
                送价值200元超级会员资格(9折)<br>
                每年还送100元生日券
                <div class="xz"></div>
            </div>
        </div>
        <div class="itembox4">
            特殊要求
        </div>
        <div class="wby">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入您的留言内容(100字内)"></textarea>
        </div>
        <div class="itembox5">
            电子发票
            <van-switch v-model="checked" class="nanniu" active-color="#3C2314" @click="oop"/>
        </div>
        <div class="shipinfo2"  :style="disable">
            <mt-field label="抬头" placeholder="公司名称/个人姓名" v-model="rise"></mt-field>
            <mt-field label="税号" placeholder="纳税人识别号" type="password" v-model="duty"></mt-field>
            <mt-field label="邮箱" placeholder="电子邮箱" type="email" v-model="email"></mt-field>
        </div>
        <div class="xiadan">
            <div class="xiadan2">下单</div>
            <div class="xiadan3">
                实付：<span>￥{{total}}</span>
            </div>
        </div>
        <div class="kong"></div>
        <van-popup
                    v-model="show"
                    position="bottom"
        >
            <div class="van-areacolor">
                <van-area
                @cancel="cancelCity"
                @confirm="getArae"
                 :area-list="areaList"
                value="110101"
                title="选择省/市/区"/>
            </div>
         </van-popup>
        
        <van-popup
                    v-model="time_show"
                    position="bottom"
                >
                <div class="van-areacolor">
                    <van-datetime-picker
                    @cancel="cancel_time"
                    @confirm='getTime'
                    v-model="currentTime"
                    type="time"
                    :min-hour="10"
                    :max-hour="20"
                    title="选择时间"
                    />
                </div>
        </van-popup>
    </div>
    
</template>

<script>
import header from '../gongYong/header'
export default {
    components:{
        "mt-header":header
    },
    methods: {
        getCarts(){

          var url = 'user/getCarts';
          this.axios.get(url)
           .then(res=>{
              this.carts = res.data;
             console.log(res.data);
          
               this.$store.commit('clearCartCount');//每次加载前先清空数量
                var sum = 0;
                for(var item of this.carts){ //item 直接取到每一项value, 累加数量
                sum+=item.counts;
                }
                this.$store.commit('modifyCartCount',sum); //更新数量


           })
           .catch(err=>{
               console.log(err);
           })  
        },
        cancelCity(){},
        getArae(e){
        // console.log(e);
            this.province=e[0].name;
            this.city=e[1].name;
            this.area=e[2].name;
            this.show = !this.show;
            //this.province=
        },
        cancel(){
            this.show = !this.show;
        },
        getTime(value){
    
        this.time_show = !this.time_show; 
        this.peisongtime=value;
        console.log(this.peisongtime);
        },
        cancel_time(){
            this.time_show = !this.time_show;
        },
        num2(e,i){

            var index = e.target.dataset.index;
            console.log(index);
            
            if(i==-1&&this.carts[index].counts>1){
                  this.$store.commit('subCartCount')
            }else if(i==1){
               this.$store.commit('addCartCount'); 
            }
            this.carts[index].counts+=i;
            this.carts[index].counts<1&&(this.carts[index].counts=1);
     
            
        },
        aop(){
            this.showclass.show=!this.showclass.show;
        },
        oop(){
            var bool=this._data.checked;
            if(bool){
            this.disable="display:none"
            }else{
            this.disable="display:block"
            }
        },   
        showPopup() {
        this.show = true;
        },
        showPopup2(){
        this.time_show = true;
        }
  },
   data(){   
       return{
           carts:[],
           province:'北京',
           city:'北京市',
           area:'东城区',
           confirm:"",
           number:1,
           peisongtime:'请选择配送时间',
           currentTime: '12:00',
           showclass:{show:true},
           checked: false,
           show: false,
           time_show:false,
           disable:"",
           rise:"",
           duty:"",
           email:"",
           username:'',
           userphone:'',
           consignee:'',
           consigneephone:'',
           dz:'',
           address:"",
           areaList:areaList,
           cakes:[{price:255,num:1},{price:198,num:2}]
       }
  },
  computed:{
      total(){
          var sum = 0;
          for(var i= 0;i<this.carts.length;i++){
              sum+=this.carts[i].price*this.carts[i].counts.toFixed(2);
          }
          return  sum;
      }
  },
  created(){
      this.getCarts();
  }
}
</script>

<style scoped>

body{
    font-family: sans-serif;
}
    ul,ol {
        list-style: none;
    }
    .kong {
        width: 100%;
        height: 47.75px;
        border-bottom: 1px solid #e7e7e7;
    }
    .show {
        display: none;
    }
    .cartBox {
        padding-left: 21px;
        width:354px;
        height: 146px;
    }
    .goods_wrap>.goods_item{
        border-bottom: 1px solid #e7e7e7;
        width: 354px;
        height: 116px;
        padding-top: 14.5px;
        padding-bottom: 14.5px;
    }
    .goods_wrap>.goods_item>.img{
        width: 78px;
        height: 78px;
        border: 1px solid #e7e7e7;
        float: left;
    }
    .goods_wrap>.goods_item>.img>a>img{
        width: 100%;
        height: 100%;
    }
    .goods_wrap>.goods_item>.info{
        float: left;
        width: 260px;
        height: 116px;
        margin-left: 14px;
        position: relative;
    }
    .goods_wrap>.goods_item>.info>.op{
        width: 73px;
        height: 24px;
        top: 0;
        right: 21px;
        position: absolute;
    }
    .goods_wrap>.goods_item>.info>.op>.less{
        background: url(../../../public/imgs/bill_img/subtract.png)no-repeat 50% 50%;
        background-size: 24px;
        width: 24px;
        height: 24px;
        float: left;
    }
    .goods_wrap>.goods_item>.info>.op>.number{
        font-family: sans-serif;
        width: 25px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        float: left;
        font-size:12px;
        
    }
    .goods_wrap>.goods_item>.info>.op>.more{
        background: url(../../../public/imgs/bill_img/add.png) no-repeat 50% 50%;
        background-size: 24px;
        width: 24px;
        height: 24px;
        float: left;
    }
    .info>.name {
        font-size: 12px;
        width: 100%;
        height: 24px;
        line-height: 24px;
        text-align: left;
        letter-spacing: 0.8px;
        font-family: sans-serif;
    }
    .info>.size {
        font-size: 12px;
        width: 100%;
        height: 24px;
        line-height: 24px;
        text-align: left;
        color: #AA8764;
        letter-spacing: 1.1px;
        font-family: sans-serif;
    }
    .info>.tips {
        font-size: 12px;
        width: 100%;
        height: 22px;
        line-height: 22px;
        text-align: left;
        color: #AA8764;
        letter-spacing: 1.1px;
        font-family: sans-serif;
    }
    .info>.tips>span {
        float: right;
        margin-right: 21px;
        color: #aaa;
    }
    .info>.priceBox {
        width: 100%;
        height: 21px;
        border-top: 1px solid #e7e7e7;
        padding-top: 14.5px;
        margin-top: 14.5px;
        letter-spacing: 1.1px;
        font-size: 12px;
    }
    .info>.priceBox>.left {
        font-family: sans-serif;
        font-size:12px;
        letter-spacing: 1.2px;
        float: left;
    }
    .info>.priceBox>.right{
        font-family: sans-serif;
        letter-spacing: 1.2px;
        float: right;
        color: #AA8764;
        margin-right: 12px;

    }
    .listBox {
        width: 100%;
        height: 48px;
        border-bottom: 1px solid #e7e7e7;
        display:flex;
        justify-content:space-between;
        margin-top:10px;
        padding-top: 12px;
    }
    .listBox>.left {
        font-family: sans-serif;
        width: 279px;
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-left: 21px;
        /*float: left;*/
        text-align: left;
        color: #3C2314;
    }
    .listBox>.right {
        width: 17px;
        height: 48px;
        /*float: left;*/
        margin-left: 38px;
        background: url(../../../public/imgs/bill_img/forward_ico.png) no-repeat 50% 48%;
        background-size: 12px;
    }
    .otherBox {
        width: 100%;
        height: 302px;
        box-sizing: border-box;
        padding: 21px 0 21px 21px;
    }
    .otherBox ul li{
        float: left;
        border: 1px solid #e9e9e9;
        padding: 7px;
        width: 147px;
        height: 63px;
        margin-bottom: 7px;
        margin-right: 7px;
    }
    .otherBox ul li>.left {
        float: left;
        width: 43%;
        height: 63px;
    }
    .otherBox ul li>.left>a>img {
        width: 63px;
        height: 63px;
    }
    .otherBox ul li>.right {
        float: left;
        width: 57%;
        height: 63px;
        box-sizing: border-box;
        padding-left: 8px;
    }
    .otherBox li>.right>.title {
        width: 100%;
        height: 16px;
        line-height: 16px;
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-top:6px;
        text-align: left;
        color: #3C2314;
    }
    .otherBox li>.right>.op {
        width: 100%;
        height: 16px;
        line-height: 16px;
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-top:16px;
        text-align: left;
        color: #aaa;
    }
    .itembox {
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
        background-color: #f8f8f8;
        height: 38px;
        line-height: 39px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        text-align: left;
        letter-spacing: 0.8px;
        margin-bottom: -1px;
        font-size: 12px;
        color:#aaa;
        box-sizing: border-box;
    }
    .shipinfo {
        width: 100%;
        height: 329px;
        padding:0 10px;
        box-sizing:border-box;
    }
    .shipinfo>>>.mint-field .mint-cell-title {
        width: 70px;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        font-size: 12px;
        text-align: left;
        font-family: sans-serif;
        color: #3C2314;
    }
    .shipinfo>>>.mint-field .mint-cell-value {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-family: sans-serif;
        font-size: 12px;
        color: #3C2314;
    }
    .selected_box {
        width: 100%;
        height: 50px;
        text-align: left;
        padding:0 8px;
        margin-top:8px;
        margin-bottom:-8px; 
        box-sizing: border-box;
    }
    .selected {
        border: 1px solid #3C2314;
        padding: 7px 19px;
        line-height: 40px;
        color: #3C2314;
        letter-spacing: 0.8px;
        font-family: sans-serif;
        font-size: 12px;
        box-sizing: border-box;
    }
    .selected~.selected {
        margin-left: 15px;
    }
    .diz {
        width: 100%;
        height: 45px;
    }
    
    .listBox2 {
        width: 100%;
        height: 48px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;

    }
    .listBox2>.left {
        font-family: sans-serif;
        width: 319px;
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-left: 11px;
        float: left;
        text-align: left;
        color: #3C2314;
    }
    .listBox2>.left>span {
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-left: 44%;
        color: #aaa;
    }
    .listBox2>.right {
        width: 17px;
        height: 48px;
        float: left;
        background: url(../../../public/imgs/bill_img/forward_ico.png) no-repeat 50% 52%;
        background-size: 12px;
    }
    .itembox2 {
        width: 100%;
        padding-left: 11px;
        padding-right: 21px;
        background-color: #f8f8f8;
        height: 38px;
        line-height: 39px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        text-align: left;
        letter-spacing: 0.8px;
        font-size: 12px;
        color:#aaa;
        box-sizing: border-box;
    }
    .selected_box2 {
        width: 100%;
        height: 45px;
        text-align: left;
        padding:0 21px;
        box-sizing: border-box;
        margin-top:4px;
    }
    .selected_box3 {
        width: 100%;
        height: 45px;
        text-align: left;
        padding:0 21px;
        box-sizing: border-box;
        margin-top:-5px;
    }
    .selected2 {
        border: 1px solid #3C2314;
        padding: 7px 19px;
        line-height: 40px;
        color: #3C2314;
        letter-spacing: 0.8px;
        font-family: sans-serif;
        font-size: 12px;
        box-sizing: border-box;
    }
    .selected2~.selected2 {
        margin-left: 15px;
    }

    
    .listBox3 {
        width: 100%;
        height: 48px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;

    }
    .listBox3>.left {
        font-family: sans-serif;
        width: 319px;
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-left: 21px;
        float: left;
        text-align: left;
        color: #3C2314;
    }
    .listBox3>.left>span {
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        margin-left: 54%;
        color: #aaa;
    }
    .listBox3>.right {
        width: 17px;
        height: 48px;
        float: left;
        background: url(../../../public/imgs/bill_img/forward_ico.png) no-repeat 50% 52%;
        background-size: 12px;
    }
    .itembox3 {
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
        background-color: #f8f8f8;
        height: 38px;
        line-height: 39px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        text-align: left;
        letter-spacing: 0.8px;
        font-size: 12px;
        color:#aaa;
        box-sizing: border-box;
    }
    .yhpanel {
        width: 100%;
        height: 60px;
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        box-sizing: border-box;
        padding:0 21px;
    }
    .yhpanel1 {
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        width: 10%;
        height: 60px;
        color: #3C2314;
        background: #C8B49B;;
        float: left;
        box-sizing: border-box;
        padding-top:15px;
    }
    .yhpanel2 {
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
        width: 90%;
        height: 60px;
        padding-left:8px;
        line-height: 16px;
        padding-top:5px;
        float: left;
        box-sizing: border-box;
        text-align: left;
        color: #3C2314;
        border:1px solid #3c2314;
        position: relative;
    }
    .xz {
        position: absolute;
        width: 18.75px;
        height: 18.75px;
        top: 0;
        right: 0;
        background: url(../../../public/imgs/bill_img/chk1.png) no-repeat 50% 50%;
        background-size: 18.75px;
        top: 18px;
        right: 3px;
    }
    .itembox4 {
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
        background-color: #f8f8f8;
        height: 38px;
        line-height: 39px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        text-align: left;
        letter-spacing: 0.8px;
        font-size: 12px;
        color:#aaa;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    .wby {
        width: 100%;
        padding-left: 21px;
        height: 45px;
        text-align: left;
        box-sizing: border-box;
    }
    .wby>textarea {
        width: 94%;
        height: 44px;
        font-family: sans-serif;
        font-size: 12px;
        letter-spacing: 0.8px;
    }
    .itembox5 {
        width: 100%;
        padding-left: 21px;
        padding-right: 21px;
        background-color: #f8f8f8;
        height: 38px;
        line-height: 39px;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        text-align: left;
        letter-spacing: 0.8px;
        font-size: 12px;
        color:#aaa;
        margin-top: 10px;
        margin-bottom: 8px;
        box-sizing: border-box;
    }
    .nanniu {
        margin-top:1.5px;
        float: right;
    }

    .shipinfo2 {
        width: 100%;
        height: 190px;
        padding:0 10px;
        box-sizing:border-box;
        display: none;
    }
    .shipinfo2>>>.mint-field .mint-cell-title {
        width: 35px;
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        font-size: 12px;
        text-align: left;
        font-family: sans-serif;
        color: #3C2314;
    }
    .shipinfo2>>>.mint-field .mint-cell-value {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-family: sans-serif;
        font-size: 12px;
        color: #3C2314;
    }
    .xiadan {
        width: 100%;
        height: 48px;
        position:fixed;
        left: 0;
        bottom: 0;
        background: white;
        z-index: 999;
    }
    .xiadan2 {
        width: 27%;
        height: 44px;
        float: right;
        background: #3C2314;
        font-family: sans-serif;
        font-size: 14px;
        color: white;
        line-height: 44px;
        border-top: 1px solid #e7e7e7;
        z-index: 999;
        text-align:center;

    }
    .xiadan3 {
        width: 27%;
        height: 50px;
        display: block;
        float: right;
        font-family: sans-serif;
        font-size: 14px;
        color: #3C2314;
        line-height: 50px;
        border-top: 1px solid #e7e7e7;
        z-index: 999;
    }
</style>
