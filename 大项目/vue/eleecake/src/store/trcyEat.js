import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj : {},
    cartCount:0//购物车的数量
  },
  mutations: {
    setObj(state,obj){
      state.obj = obj;
    },
  
    addCartCount(state){ //增加
      state.cartCount++;
      },
      subCartCount(state){ //减少
      state.cartCount--;
      },
      
      modifyCartCount(state,num){
      state.cartCount+=num;
      },
      clearCartCount(state){ //清空
        state.cartCount=0;
        },
      },
      //(3)获取函数

  actions: {
  },
  modules: {
  },
  getters:{
    getObj(state){
      return state.obj;
    },
    getCartCount(state){ return state.cartCount;}
  }
})



  //(2)修改函数
  
 


