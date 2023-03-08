import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mint from './mint-ui'
import './mock/mockServer'// 加载mockServer
Vue.use(mint);
new Vue({//vue实例化VUE对象
  render: (h) => h(App),//ES6箭头函数写法。使用App作为这个Vue实例的template（同时一并了注册App组件）
  router, // 使用上vue-router
  store,// 使用上vuex
}).$mount('#app')