<template>
<div>
    <div>
        <div class="header">
            <div class="header-top">
                <div class="header-top-bar" style="text-align:center">
                    <router-link to="/trcyeat">
                      <van-icon name="arrow-left" />
                    </router-link>
                    <p>{{obj.title}}</p>
                </div>
            </div>
        </div>
        <div class="body">
            <ul>
                <li>
                    <b>公司名称</b>
                    <input type="text" placeholder="请输入公司名称">
                </li>
                <li>
                    <b>联系人</b>
                    <input type="text" placeholder="请输入联系人姓名">
                </li>
                <li>
                    <b>手机号</b>
                    <input type="text" placeholder="请输入联系人手机号码">
                </li>
                <li>
                    <b>{{obj.subtitle}}</b>
                    <input type="text" :placeholder="obj.text">
                </li>
            </ul>
            <a href="javascript:;" @click="showPopup">提交</a>
            <van-popup :style="{width:'90%',height:'10%', borderRadius:'10px',paddingTop:'60px'}" v-model="show" style="padding-left:50%">请输入公司名称</van-popup>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            obj : {},
            show:false
        }
    },
    created() {
        this.obj = this.$store.getters.getObj;
    },
    methods: {
        showPopup(){
            this.show=true
        }
    },
}
</script>
<style scoped>
.header{
    height:48px;
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
}
.header-top-bar{
    border-bottom:1px solid #e9e9e9;
    background: #fff;
}
ul{
    text-align: left;
    font-size: 12px;
    color: #3C2314;
}
ul>li{
    padding-left:11px;
    height:48px;
    line-height: 48px;
    border-bottom: 1px solid #e7e7e7;
}
ul>li>b{
    display: inline-block;
    width:65px;
}
ul>li>input{
    display: inline-block;
    width:251px;
    height:28px;
    border:0;
}
input::-webkit-input-placeholder{
   color: #ebebeb;
}
.body>a{
    display: block;
    width:337px;
    height:16px;
    font-size: 12px;
    text-align: center;
    padding:11px 0;
    background-color: #3C2314;
    color: #FBF5DD;
    margin:19px auto;
}
</style>
