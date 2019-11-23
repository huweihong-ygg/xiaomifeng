<template>
<div>
    <div class="header">
        <div class="header-top">
            <div class="header-top-bar">
                <a href="javascript:;" @click="btn1">
                    <van-icon name="arrow-left" />
                </a>
                <p>生日卡激活</p>
            </div>
        </div>
    </div> 
    <div class="body">
        <van-tabs v-model="active">
            <van-tab title="微信扫一扫">
                <div class="body-b">
                    <div>
                        <div class="body-text">
                            点击下方微信扫一扫按钮，扫描生日卡上的激活码<br>
                            扫完激活码后，卡面金额会充值到账户预存款中。<br>
                            预存款余额请到"个人中心"查看
                        </div>
                        <div class="body-a">
                            <a href="javascript:;">
                                <span>打开微信扫一扫</span>
                            </a>
                        </div>
                    </div>
                    <div class="body-b-m">
                        <a href="javascript:;">我要购买生日卡>></a>
                    </div>
                </div>
            </van-tab>
            <van-tab title="卡号密码充值">
                <div class="body-b">
                    <div>
                        <div class="body-text">
                            生日卡卡号及密码请勿透露给他人!<br>
                            充值成功后，卡面金额会充值到账户预存款中。<br>
                            预存款余额请到"个人中心"查看
                        </div>
                        <div class="input"><input type="text" placeholder="请输入卡号"></div>
                        <div class="input"><input type="text" placeholder="请输入密码"></div>
                        <div class="body-a">
                            <a href="javascript:;">
                                <span>马上充值</span>
                            </a>
                        </div>
                    </div>
                    <div class="body-b-m">
                        <a href="javascript:;">我要购买生日卡>></a>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</div>    
</template>
<script>
export default {
    data(){
        return{
            active:2
        }
    },
    methods:{
        btn1(){
this.$router.go(-1)

        }
    }
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
.van-tab--active{
    background: #3C2314;
    color:#fff;
}
.body-b{
    margin:11px 11px;
    text-align: center;
}
.body-b input{
    width:60%;
    height:30px;
    padding:1px 0 0 5px;
    border: 1px solid #e7e7e7;
    font-size:100%;
}
input::-webkit-input-placeholder{
   color: #ebebeb;
   font-size: 12px;
}
.input{
    margin-top:11px;
}
.body .body-text{
    font-size:12px;
    color:#999;
    line-height: 25px;
}
.body-a{
    margin:30px 0;
}
.body-a>a{
    display: inline-block;
    width:100%;
    height:38px;
    background:#3C2314;
    color:#fff;
    text-align: center;
}
.body-a>a>span{
    line-height: 38px;
    font-size: 12px;
}
.body-b-m{
    margin-top:20px;
    text-align: right;
}
.body-b-m>a{
    color:#3C2314;
    font-size: 12px;
}
.body>>>.van-tabs__line{
    height:0;
}
.body>>>.van-tab--active{
    background:#3C2314 !important;
    border:1px solid #3C2314;
    color:#fff;
}
</style>
