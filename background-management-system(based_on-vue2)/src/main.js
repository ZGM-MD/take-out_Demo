import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import  store  from './store'
import element from './element-ui'
import './api/mock'
import Cookie from 'js-cookie'
Vue.use(element)

//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  //判断token是否存在
  const token = Cookie.get('token')
  if (!token && to.name != 'login') {
    //token不存在，说明当前用户是未登录，应该跳转至登录页面
    next({ name: 'login'})
  }
  else if (token && to.name == 'login'){ //token存在说明用户登录，此时跳转至首页
    next({ name: 'home'})
  } else {
    next()
  }
})
new Vue({
  router,//将router挂载到根节点上
  store,
  render: (h) => h(App),
  created() {
    store.commit('addMenu',router)
  }
}).$mount('#app')
