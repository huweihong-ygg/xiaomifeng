<template>
<div>
    <div>
        <div class="header">
            <div class="header-top">
                <div class="header-top-bar">
                    <a href="">
                      <van-icon name="arrow-left" />
                    </a>
                    <p>企业专区</p>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="comp_body">
                <div class="comp_nav">
                    <router-link to=""><img src="../../../public/imgs/企业试吃.jpg" alt=""></router-link>
                    <router-link to=""><img class="two" src="../../../public/imgs/企业采购.jpg" alt=""></router-link>
                    <router-link to=""><img src="../../../public/imgs/专属定制.jpg" alt=""></router-link>
                </div>
                <div class="comp_item">
                    <h2>生日卡（员工福利／客户礼品）
                        <router-link to="/birthdaycart">预约</router-link>
                    </h2>
                    <router-link to=""><img src="../../../public/imgs/qy_srk.jpg" alt=""></router-link>
                </div>
                <div class="comp_item">
                    <h2>企业试吃
                        <router-link to="/trcyeat_in">
                            <span @click="add" data-obj="oop1">预约</span>
                        </router-link>
                    </h2>
                    <h3>企业免费试吃通道，为您的办公室增加甜蜜</h3>
                    <p>小蜜蜂企业团队已陆续为地产行业、地产、医院、滴滴打车、猫眼电影、国美电器、国家广播电影电视总局、世纪佳缘等等品牌提供企业试吃服务。</p>
                </div>
                <div class="comp_item">
                    <h2>企业采购
                        <router-link to="/trcyeat_in">
                            <span @click="add" data-obj="oop2">预约</span>
                        </router-link>
                    </h2>
                    <h3>企业员工福利／客户礼品馈赠／企业定制福利券</h3>
                    <p>如有意进行企业采购合作，想了解更多详细信息，请您填写以下基本信息，我们会及时与您联系。</p>
                </div>
                <div class="comp_item">
                    <h2>企业定制蛋糕
                        <router-link to="/trcyeat_in">
                            <span @click="add" data-obj="oop3">预约</span>
                        </router-link>
                    </h2>
                    <h3>企业员工福利／客户礼品馈赠／企业定制福利券</h3>
                    <p>可定制企业专属蛋糕、添加企业元素、企业庆典、商务宴会、发布会等。如需定制，请留言告诉我们，收到留言后我们会及时与您联系。</p>
                </div>
                <div class="comp_item">
                    <h2>合作兑换
                        <a href="javascript:;">兑换</a>
                    </h2>
                    <h3>业务或市场部门与其他企业资源置换活动兑换的蛋糕，验证电子券密码进行兑换</h3>
                    <p></p>
                </div>
                <div class="comp_item">
                    <h2>市场合作
                        <router-link to="/trcyeat_in">
                            <span @click="add" data-obj="oop4">预约</span>
                        </router-link>
                    </h2>
                    <h3>合作户推／企业赞助／线下活动赞助／资源置换／广告投放合作</h3>
                    <p></p>
                </div>
                <div class="comp_item">
                    <h2>蛋糕切块DIY
                        <router-link to="/trcyeat_in">
                            <span @click="add" data-obj="oop3">定制</span>
                        </router-link>
                    </h2>
                    <h3>用蛋糕切块拼接成文字或图案形状，每个切块大小约4cm*4cm</h3>
                    <p><img src="../../../public/imgs/diy.jpg" alt=""></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   data(){
       return{
            oop1:{title:"企业试吃",subtitle:"试吃人数",text:"请输入试吃人数"},
            oop2:{title:"企业采购",subtitle:"采购需求",text:"请简单描述您的采购需求"},
            oop3:{title:"专属定制",subtitle:"定制需求",text:"请简单描述您的定制需求"},
            oop4:{title:"市场合作",subtitle:"合作意向",text:"请简单描述您的合作意向"},
       }
   },
   methods: {
       add(e){
           this.$store.commit("setObj",this[e.target.dataset.obj]);
       }
   },
  
}
</script>
<style scoped>
.header{
    height:53px;
}
.header-top{
    position: fixed;
    width:100%;
}
.header-top-bar>a{
    float: left;
    margin-left:10px;
    line-height:53px;
    color: #3C2314;
    z-index:999;
}
.header-top-bar>p{
    font-size: 15px;
    line-height:53px;
    color: #3C2314;
}
.header-top-bar{
    border-bottom:1px solid #e9e9e9;
    background: #fff;
}
.body{
    font-size: 12px;
    color: #3C2314;
}
.comp_nav{
    display: flex;
}
.comp_nav img{
    width:95%;
}
.comp_body{
    margin:8px 12px;
}
.comp_item{
    margin-top:21px;
    padding-bottom: 8px;
    text-align:left;
}
.comp_item>h2{
    padding-bottom: 8px;
    border-bottom: 1px solid #e7e7e7;
    font-size: 17px;
    color: #AA8764;
    line-height: 22px;
    font-weight: 500;
}
.comp_item>h3{
    margin:7px 0;
    font-size:16px;
    font-weight: 500;
}
.comp_item>h2 a{
    display: inline-block;
    color: #FBF5DD;
    background-color: #3C2314;
    padding:0 12px;
    margin-left:21px;
    font-size: 15px;
}
.comp_item img{
    width:100%;
}
</style>
