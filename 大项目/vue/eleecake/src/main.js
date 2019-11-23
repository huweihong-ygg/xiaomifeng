import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store/trcyEat'


// 引入和配置mint-ui组件库
// 1.完整引入mint-ui组件库
import MintUI from "mint-ui"
// 2.单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
// 3.将mint-ui对象注册到vue实例中
Vue.use(MintUI)

import  Vant from 'vant';
import "vant/lib/index.css"
Vue.use(Vant);

// 4：引入第三方axios
import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:5050/'
axios.defaults.withCredentials=true;
//8.将axios 注册vue实列中，注意顺序
Vue.prototype.axios = axios;
import Vuex from 'vuex'
//10 注册vuex
Vue.use(Vuex)
// Vue.config.productionTip = false
















new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
