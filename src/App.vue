<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 不推荐这样写,因为后期有很多页面都不需要显示footer这里边就会写很长 -->
    <!-- <Footer v-show="$route.path !=='//login' && $route.path !=='/register'"></Footer> -->
    <Footer v-show="! $route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name:'App',
  // 非路由组件的注册
  components:{
    Header,
    Footer
  }

}
</script>

<style>

</style>