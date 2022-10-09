//引入vue
import Vue from 'vue'
//引入APP
import App from './App.vue'
//引入VueRouter路由
import VueRouter from 'vue-router'
//引入路由器
import router from '../src/router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  el:"#app",
  render: h => h(App),
  router:router
})
