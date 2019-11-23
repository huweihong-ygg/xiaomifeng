<template>
<div>
    <div class="header">
        <div class="header-top">
            <div class="header-top-bar">
                <a href="javascript:;" @click="btn1">
                    <van-icon name="arrow-left" />
                </a>
                <p>预存充值</p>
            </div>
        </div>
    </div> 
    <div class="body">
        <div class="body_top">
            <div>
                可用预存款： <span> ¥</span>
                <div class="clear">
                    <router-link to="/activation">我有生日卡，去激活></router-link>
                    <a href="javascript:;" style="float:right;">交易记录></a>
                </div>
            </div>
        </div>
        <div>
            <img src="../../../public/imgs/m01.jpg" alt="">
        </div>    
        <div>
            <a href="javascript:;" @click="doit12">
                <img src="../../../public/imgs/mbtn1.jpg" alt="">
            </a>
        </div>
        <div v-show="do12" class="tradeBox">
            <div class="tradeBox_p" @click="doit22">您的手机号为15633221569,点击修改</div>
            <div class="telpanel" v-show="do22">
                <ul>
                    <li>
                        <label for>手机号:</label>
                        <input type="text" value=15633221569>
                    </li>
                    <li class="f">
                        <div>
                            <label for>验证码:</label>
                            <input type="text" placeholder="请输入图片验证码">
                        </div>
                        <div class="f1">
                            <label></label>
                            <img src="../../../public/imgs/timg.jpg" alt="">
                        </div>
                    </li>
                    <li class="f">
                        <div>
                            <label for>短信验证码:</label>
                            <input type="text" placeholder="请输入短信验证码">
                        </div>
                        
                        <div class="f1"><label></label>发送验证码</div>
                    </li>
                </ul>
            </div>
            <div class="tradeBox_m">
                <div @click="change">
                    <span class="active">1000元</span>
                    <span>2000元</span>
                    <span>5000元</span>
                    <span>自定义</span>
                </div>
            </div>
            <div class="tradeBox_f">
                <div><a href="">微信支付</a></div>
                <div><a href="">支付宝支付</a></div>
            </div>
        </div>
        <div>
            <img src="../../../public/imgs/m02.jpg" alt="">
        </div>
        <div>
            <img src="../../../public/imgs/m03.jpg" alt="">
        </div>
        <div>
            <img src="../../../public/imgs/m04.jpg" alt="">
        </div>
        <div>
            <a href="javascript:;" @click="doit11">
                <img src="../../../public/imgs/mbtn2.png" alt="">
            </a>
        </div>
        <div v-show="do11" class="tradeBox">
            <div class="tradeBox_p" @click="doit21">您的手机号为15633221569,点击修改</div>
            <div class="telpanel" v-show="do21">
                <ul>
                    <li>
                        <label for>手机号:</label>
                        <input type="text" value="15633221569">
                    </li>
                    <li class="f">
                        <div>
                            <label for>验证码:</label>
                            <input type="text" placeholder="请输入图片验证码">
                        </div>
                        <div class="f1">
                            <label></label>
                            <img src="../../../public/imgs/timg.jpg" alt="">
                        </div>
                    </li>
                    <li class="f">
                        <div>
                            <label for>短信验证码:</label>
                            <input type="text" placeholder="请输入短信验证码">
                        </div>
                        <div class="f1"><label></label>发送验证码</div>
                    </li>
                </ul>
            </div>
            <div class="tradeBox_m">
                <div @click="change">
                    <span class="active">1000元</span>
                    <span>2000元</span>
                    <span>5000元</span>
                    <span>自定义</span>
                </div>
            </div>
            <div class="tradeBox_f">
                <div><a href="">微信支付</a></div>
                <div><a href="">支付宝支付</a></div>
            </div>
        </div>
        <div>
            <img src="../../../public/imgs/m05.jpg" alt="">
        </div>
        <div>
            <img src="../../../public/imgs/m06.jpg" alt="">
        </div>
        <div>
            <img src="../../../public/imgs/m07.jpg" alt="">
        </div>
        <div>
            <a href="javascript:;" @click="doit1">
                <img src="../../../public/imgs/mbtn2.png" alt="">
                <br>
                <br>
                <br>
            </a>
        </div>
        <div v-show="do1" class="tradeBox">
            <div class="tradeBox_p" @click="doit2">您的手机号为15633221569,点击修改</div>
            <div class="telpanel" v-show="do2">
                <ul>
                    <li>
                        <label for>手机号:</label>
                        <input type="text" value="15633221569">
                    </li>
                    <li class="f">
                        <div>
                            <label for>验证码:</label>
                            <input type="text" placeholder="请输入图片验证码">
                        </div>
                        
                        <div class="f1">
                            <label></label>
                            <img src="../../../public/imgs/timg.jpg" alt="">
                        </div>
                    </li>
                    <li class="f">
                        <div>
                            <label for>短信验证码:</label>
                            <input type="text" placeholder="请输入短信验证码">
                        </div>
                        
                        <div class="f1"><label></label>发送验证码</div>
                    </li>
                </ul>
            </div>
            <div class="tradeBox_m">
                <div @click="change">
                    <span class="active">1000元</span>
                    <span>2000元</span>
                    <span>5000元</span>
                    <span>自定义</span>
                </div>
            </div>
            <div class="tradeBox_f">
                <div><a href="">微信支付</a></div>
                <div><a href="">支付宝支付</a></div>
            </div>
        </div>
    </div>   
</div>    
</template>
<script>
export default {
    data() {
        return {
            do1:false,
            do11:false,
            do12:false,
            do2:false,
            do21:false,
            do22:false
        }
    },
    methods: {
        change(e){
            var span=e.target;
            for(var s of span.parentNode.children){
                s.className=""
            }
            if(span.nodeName=="SPAN"){
                span.className="active";
            }
        },
        btn1(){
            this.$router.go(-1)
        },
        doit1(){
            this.do1=!this.do1
        },
        doit11(){
            this.do11=!this.do11
        },
        doit12(){
            this.do12=!this.do12
        },
        doit2(){
            this.do2=!this.do2
        },
        doit21(){
            this.do21=!this.do21
        },
        doit22(){
            this.do22=!this.do22
        }
    },
}
</script>
<style scoped>
img{
    width:100%;
}
.header{
    height:48px;
}
.header-top{
    position: fixed;
    width:100%;
}
.header-top-bar>a{
    float: left;
    margin-left:10px;
    line-height:48px;
    color: #3C2314;
}
.header-top-bar>p{
    font-size: 14px;
    line-height:48px;
    color: #3C2314;
    text-align: center;
}
.header-top-bar{
    border-bottom:1px solid #e9e9e9;
    background: #fff;
}
.body{
    background:#000;
    font-family: sans-serif;
}
.body_top{
    text-align: left;
    padding:4px 21px 0 21px;
}
.body_top>div{
    color:#fff;
    font-size: 12px;
    height:41px;
    margin-bottom: 5px;   
}
.body_top>div>span{
    font-size: 19px;
}
.clear>a{
    font-size: 12px;
    color:#f2c065;
}
.tradeBox{
    font-size:12px;
    color:#f2c065;
    text-align: center;
}
.tradeBox_p{
    border-bottom:1px solid #3c2314;
    text-align: center;
    line-height: 36px;
}
.tradeBox_m>div>span{
    display: inline-block;
    border:1px solid #e7e7e7;
    padding:9px;
    margin-right:14px;
   text-align: center;
    background:#fff;
    color:#000;
}
.tradeBox_m>div>.active{
    padding: 8px 8px;
    border: 2px solid #f2c065;
    color: #ffffff;
    background: url("../../../public/imgs/selected.png") no-repeat #2f2f2f;
    background-position: bottom right;
}
.tradeBox_m>div{
    padding:0 11px 11px;
    margin-top:11px;
    border-bottom: 1px solid #3c2314;
}
.tradeBox_f{
    padding:21px 0;
}
.tradeBox_f>div>a{
    display: inline-block;
    box-shadow: 0 0 10px #cea45c;
    background:#ffe6ad;
    color:#000;
    text-align: center;
    font-weight: bold;
    width:190px;
    height:40px;
    line-height: 40px;
    margin-top:15px;
    font-size: 15px;
}
.telpanel>ul{
    text-align: left;
    font-size: 12px;
    color:#fff;
    background: #000;
}
.telpanel>ul>li{
    padding:7px 0 7px 38px;
}
.telpanel>ul>li label{
    display: block;
    height:16px;
}
.telpanel>ul>.f{
    display: flex;
}
.telpanel>ul>li>div{
    width:50%;
}
.telpanel>ul>li img{
    width:72px;
    height:24px;
}
.telpanel>ul>li input{
    height:30px;
    width:48%;
    color:#000;
}
.f input{
    width:120px !important;
}
.f1{
    color:#f2c065;
}
</style>
