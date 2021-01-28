import {reqCategoryList} from '@/api'
const state ={
    // 存数据
    categoryList:[]
}
const mutations={
    // 直接修改数据
    RECEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
}
const actions ={
    // 与组件当中用户对接
    // 一般是异步发请求
    // 提交mutations
    async getCategoryList({commit}){
        //发请求,拿数据.提交给mutations,存储到state
        const result= await reqCategoryList()
        if(result.code ===200){
            commit('RECEIVE_CATEGORYLIST',result.data)
        }
    }
}
const getters={
    // 后面用来简化数据的操作
}
export default{
    state,
    mutations,
    actions,
    getters
}