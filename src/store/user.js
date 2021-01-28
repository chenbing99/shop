// user模块的vuex模块
// home的vuex模块
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state ={
    // 存数据
}
const mutations={
    // 直接修改数据
}
const actions ={
    // 与组件当中用户对接
    // 一般是异步发请求
    // 提交mutations
}
const getters={
    // 后面用来简化数据的操作
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})