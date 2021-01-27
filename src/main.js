import Vue from 'vue'
//import App from './App.vue'
// 可写成下边这种形式,@是一个别名,代表的就是src的路径
import App from '@/App'
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router, //我们所有组件内部都可以使用this.$router和this.$route
}).$mount('#app')
