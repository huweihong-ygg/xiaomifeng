<template>
<div>
    <mt-header></mt-header>
    <mt-header-item></mt-header-item>
    <div class="categorybody">
        <div class="cb_head" id='naiyou'>
            <h2 id="t1">奶油蛋糕</h2>
            <p>选用法国铁塔乳脂奶油</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of Cream" :key=i>
                <router-link :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head" id='bingqiling'>
            <h2 id="t2">冰淇淋蛋糕</h2>
            <p>天然冰爽 意大利冰淇淋</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of Ice" :key=i>
                <router-link :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head" id='zhishi'>
            <h2 id="t3">芝士蛋糕</h2>
            <p>皂感十足黄金乳酪</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of cheese" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head">
            <h2 id="t4">巧克力蛋糕</h2>
            <p>只用顶级法国芙娜巧克力</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of chocolates" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head">
            <h2 id="t5">人气热销</h2>
            <p>明星单品 已售出100万+</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of popularity" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head">
            <h2>生日蛋糕</h2>
            <p>属于你的特别日子 要吃大牌</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of birthday" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head">
            <h2 id="t7">好评优选</h2>
            <p>大家说好, 才是真的好</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of praise" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class="cb_head">
            <h2>馈赠推荐</h2>
            <p>有品有质, 送重要的人</p>
        </div>
        <ul class="cb_dtl">
            <li v-for="(item,i) of recommend" :key=i>
                <router-link  :to="`/detail2/${item.pid}`">
                    <div class="img"><img :src="axios.defaults.baseURL+item.pic" alt=""></div>
                    <div>{{item.pname}}</div>
                    <div class="price">¥{{item.lowest_price}}
                        <i class="add">+</i>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
    <mt-footer></mt-footer>
    <bottom-nav></bottom-nav>

</div>
</template>
<script>
import header from '../gongYong/header' 
import categrate from '../gongYong/categrate' 
import footer from '../gongYong/footer' 
import  bottomnav  from '../gongYong/bottom_nav'
export default {
    data(){
        return{
         Cream:[],
         Ice:[],
         cheese:[],
         chocolates:[],
         popularity:[],
         birthday:[],
         praise:[],
         recommend:[]
        }
    },
    methods: {
      CreamCake(){
        this.axios.get("/detalis/CreamCake").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.Cream.push(item)
                }
            }
        )
      },
      IceCream(){
          this.axios.get("/detalis/IceCream").then(
            res=>{
                var list=res.data;
                console.log(list);
                for(var item of list){
                    this.Ice.push(item)
                }
            }
        )
      },
      Cheese(){
          this.axios.get("/detalis/Cheese").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.cheese.push(item)
                }
            }
        )
      },
      Chocolates(){
          this.axios.get("/detalis/Chocolates").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.chocolates.push(item)
                }
            }
        )
      },
      Popularity(){
          this.axios.get("/detalis/Popularity").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.popularity.push(item)
                }
            }
        )
      },
      Birthday(){
          this.axios.get("/detalis/Birthday").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.birthday.push(item)
                }
            }
        )
      },
      Praise(){
          this.axios.get("/detalis/Praise").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.praise.push(item)
                }
            }
        )
      },
      Recommend(){
          this.axios.get("/detalis/Recommend").then(
            res=>{
                var list=res.data;
                for(var item of list){
                    this.recommend.push(item)
                }
            }
        )
      },
    },
 created(){
     this.CreamCake();
     this.IceCream();
     this.Cheese();
     this.Chocolates();
     this.Popularity();
     this.Birthday();
     this.Praise();
     this.Recommend();
},
    components:{
        "mt-header":header,
        "mt-header-item":categrate,
        "mt-footer":footer,
        'bottom-nav':bottomnav
    }
}
</script>
<style scoped>
a{
    color: #3C2314;
    text-decoration: none;
}
div{
    font-size: 12px;
    color: #3C2314;
}
ul{
    list-style: none;
}
img{
    border:0;
    max-width: 100%;
    display: block;
    margin:0 auto;
}

.categorybody .cb_head{
    border-top: 1px solid #fae9d6;
    border-bottom: 1px solid #fae9d6;
    background-color: #fcf6e5;
    padding:3px 0;
}
.categorybody .cb_head h2{
    font-size: 18px;
    text-align: center;
    font-weight: bold;
}
.categorybody .cb_head p{
    color: #aba9ab;
    text-align: center;
    margin-top: 5px;
}
.categorybody .cb_dtl li{
    width: 50%;
    margin-left: 0;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
    display: inline-block;
}
.categorybody .cb_dtl li .price{
    margin:5px 10px;
    border: 1px solid #e7e7e7;
    height: 25px;
    line-height: 25px;
}
.add{
    display: inline-block;
    float:right;
    font-size: 20px;
    font-style: normal;
    width: 20px;
    height: 20px;
    line-height: 20px;
    color: #AA8764;
    padding: 0;
    text-align: center;
    border: 1px solid #AA8764;
    border-radius: 50%;
    margin-right: 5px;
    vertical-align: middle;
    margin-top: 1px;
    
}

</style>
