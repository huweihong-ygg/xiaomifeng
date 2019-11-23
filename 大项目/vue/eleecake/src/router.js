import Vue from 'vue'
import Router from 'vue-router'
import elee from "./components/ebeecake/elee.vue"
import demo from "./components/ebeecake/demo.vue"
import reg from "./components/ebeecake/reg.vue"
import detalis from "./components/ebeecake/detalis.vue"
import detail2 from "./components/ebeecake/detail2.vue"
// import pre from "./components/ebeecake/pre.vue"
import bill from "./components/ebeecake/bill.vue"
import login from "./components/ebeecake/login.vue"
import index1 from "./components/carousel/index1.vue"
import index2 from "./components/carousel/index2.vue"
import index3 from "./components/carousel/index3.vue"
import index4 from "./components/carousel/index4.vue"
import nav from './components/gongYong/nav.vue'
import xuanz from './components/gongYong/xuanz.vue'
import header from './components/gongYong/header'
import trcyeat from "./components/ebeecake/trcyEat.vue"
import trcyeat_in from "./components/ebeecake/trcyEat_in.vue"
import birthdaycart from "./components/ebeecake/birthdayCart.vue"
import topup from "./components/ebeecake/topUp.vue"
import activation from "./components/ebeecake/activation.vue"


// import jinx1 from "./components/ebeecake/jinx1.vue"

// 引入轮播组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/elee",component:elee},
    {path:"/header",component:header},
    {path:"/",component:elee},
    {path:"/demo",component:demo},
    // {path:"/pre",component:pre},
    {path:"/reg",component:reg},
    {path:"/bill",component:bill},
    {path:"/login",component:login},
    {path:"/detalis",component:detalis},
    {path:"/detail2/:pid",component:detail2,props:true},
    {path:"/index1",component:index1},
    {path:"/index2",component:index2},
    {path:"/index3",component:index3},
    {path:"/index4",component:index4},
    {path:"/nav",component:nav},
    // {path:"/jinx1",component:jinx1},
    {path:"/trcyeat",component:trcyeat},
    {path:"/trcyeat_in",component:trcyeat_in},
    {path:"/xuanz",component:xuanz},
    {path:"/birthdaycart",component:birthdaycart},
    {path:"/topup",component:topup},
    {path:"/activation",component:activation}
  ]
})
