import Vue from 'vue'
//import App from './App.vue'
// 可写成下边这种形式,@是一个别名,代表的就是src的路径
import App from '@/App'
import router from '@/router'
import store from '@/store'
// 测试接口请求
// import {reqCategoryList} from '@/api'
// reqCategoryList()

//全局注册的组件,如果一个非路由组件被多个组件使用,那么定义在components,注册在全局
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router, //我们所有组件内部都可以使用this.$router和this.$route
  store  //注册上我们所有的组件都可以拿到this.$store
})
