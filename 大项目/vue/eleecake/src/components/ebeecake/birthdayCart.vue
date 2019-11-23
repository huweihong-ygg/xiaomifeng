<template>
<div>
  <mt-header></mt-header>
    <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="#000">
            <van-swipe-item v-for="(item,i) of bc" :key=i>
                <img :src="axios.defaults.baseURL+item.img" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="detailInof">
        <div class="name_size">
            <div class="name">生日卡</div>
            <div class="size" @click="open">300元实体卡 | 更多规格</div>
        </div>
        <div class="clear"></div>
        <div class="selSize">
            300元实体卡
        </div>
        <div class="price1">
            ¥300
        </div>
    </div>
    <div class="imgBox">
        <img v-for="(item,i) of bct" :key=i :src="axios.defaults.baseURL+item.img" alt="">
    </div>
    <div>
        <div class="cb_head">
            <h2>热销爆款</h2>
        </div>
        <div>
            <ul class="cb_dtl">
                <li v-for="(item,i) of hot" :key=i>
                    <router-link to="">
                        <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                        <div class="price">{{item.pname}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="evaluation">
        <div class="evaluation_s">
            <div class="title">
                商品评价
            </div>
            <div class="evaluation_span">
                <span></span>
                <span>0次评价</span>
            </div>
        </div>
        <div class="evaluation_m">
            <ul>
                <li>暂无评价</li>
            </ul>
        </div>
    </div>
    <div class="addCart">
        <div @click="open">
            <span>加入购物车</span>
        </div> 
    </div>
    <van-action-sheet v-model="show">
        <div class="show">
            <div class="show_cart">生日卡
                <span @click="open"><i><van-icon name="cross" /></i></span>
            </div>
            <div class="goodInfo">
                <div class="goodInfo_img"><img src="../../../public/imgs/4411.jpg" alt=""></div>
                <div class="goodInfo_text">
                    <div class="size_time">
                        <i></i>
                        最早23:30开始配送
                    </div>
                    <div class="size_price">
                        ¥300/
                        <span>300元实体卡</span>
                    </div>
                </div>
            </div>
            <div class="specifications">
                <div>
                    <span>300元实体卡</span>
                    <span>500元实体卡</span>
                    <span>电子卡</span>
                </div>
            </div>
            <div class="add">
                <div style=" text-align: center;">
                    <a href="">加入购物车</a>
                </div> 
            </div>
        </div>
    </van-action-sheet>
    <mt-footer></mt-footer>
</div>
</template>
<script>
import header from  '../gongYong/header'
import footer  from '../gongYong/footer' 
export default {
    data() {
        return {
            bc:[],
            bct:[],
            hot:[],
            show:false
        }
    },
    components:{
       "mt-header":header,
       "mt-footer":footer
    },
    methods: {
        open(){
            this.show=!this.show;
        },
        brithday_carousel(){
            this.axios.get("/birthdayCart/brithday_carousel").then(
                res=>{
                    var list=res.data;
                    for(var item of list){
                        this.bc.push(item)
                    }
                }
            )
        },
        brithday_cart(){
            this.axios.get("/birthdayCart/brithday_cart").then(
                res=>{
                    var list=res.data;
                    for(var item of list){
                        this.bct.push(item)
                    }
                }
            )
        },
        Hot(){
            this.axios.get("/birthdayCart/Hot").then(
                res=>{
                    var list=res.data;
                    for(var item of list){
                        this.hot.push(item)
                    }
                }
            )
        }
    },
    created(){
     this.brithday_carousel();
     this.brithday_cart();
     this.Hot();
    }
}
</script>
<style scoped>
img{
    width:100%;
}
div{
    font-size: 12px;
    color: #3c2314;
}
.detailInof{
    padding:27px 21px 0 21px;
}
.name{
    float: left;
    font-size: 20px;
    width:62px;
    height:36px;
    line-height: 36px;
}
.size{
    float: right;
    border:1px solid #e7e7e7;
    height:33px;
    width:138px;
    padding:0 10px;
    line-height: 33px;
}
.clear{
    clear:both;
}
.selSize{
    margin-top:21px;
    text-align: left;
}
.price1{
    font-size: 20px;
    margin-top:21px;
    color:#aa8764;
    font-family: sans-serif;
    font-weight: 500;
    text-align: left;
}
.imgBox{
    margin-top:35px;
}
.cb_head{
    border-top: 1px solid #fae9d6;
    border-bottom: 1px solid #fae9d6;
    background-color: #fcf6e5;
    padding:3px 0;
}
h2{
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    color:#3c2314;
}
.cb_dtl li{
    width: 50%;
    margin-left: 0;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
    display: inline-block;
}
.price{
    margin:5px 10px;
    border: 1px solid #e7e7e7;
    height: 25px;
    line-height: 25px;
    text-align:center;
}
.evaluation{
    padding-top:49px;
    width:100%;
    text-align: left;
}
.evaluation_s{
    padding:0 21px 21px;
}
.title{
    margin-bottom: 7px;
    font-size: 12px;
    height:19px;
}
.evaluation_span>span{
    float: right;
}
.evaluation_m{
    padding-left:21px;
    height:59px;
}
.evaluation_m li{
    padding:21px 21px 21px 0;
}
.addCart{
    height:50px;
    width:100%;
    position: fixed;
    bottom:0;
    background: #fff;
    z-index: 1;
}
.addCart>div,.add>div{
    padding-top:6px;
    height:100%;
}
.addCart>div>span,.add>div>a{
    display: inline-block;
    text-align: center;
    width: 88%;
    height: 35px;
    line-height: 35px;
    background-color: #3C2314;
    margin: 0 auto;
    color: #FBF5DD;
}
.add{

    width:100%;
    background: #fff;
}
.show_cart{
    text-align: left;
    margin-top:50px;
    font-size:19px;
    color:#3c2314;
    padding-left:21px;
    height:37px;
    line-height: 37px;
}
.show_cart>span{
    float: right;
    height:12px;
    width:12px;
    padding-right:10px;
    color:#d3d3d3;
}
.van-popup--bottom.van-popup--round{
    border-radius: 0;
}
.goodInfo{
    display: flex;
}
.goodInfo_img{
    width:50%;
}
.goodInfo_text{
    width:50%;
    text-align: left;  
}
.size_time i{
    margin-right:3px;
    background:url(../../../public/imgs/times25.png)
    no-repeat;
    width:25px;
    height:25px;
    display: inline-block;
    vertical-align: middle;
}
.size_time{
    width:100%;
    margin:0 0 6px 5px;
    line-height: 25px;
}
.size_price{
    font-size: 22px;
    margin:0 0 6px 5px;
    color:#aa8764;
}
.size_price>span{
    font-size: 13px;
}
.specifications>div{
    margin:11px 0 0 11px;
    text-align: left;
}
.specifications>div>span{
    display: inline-block;
    padding:0 13px;
    border:1px solid #3c3c3c;
    height:35px;
    line-height: 35px;
    margin:0 10px 10px 0;
}
.evaluation_s{
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc
}
.evaluation_m{
    border-bottom: 1px solid #ccc
}
.addCart>div{
    text-align: center;
}
</style>
