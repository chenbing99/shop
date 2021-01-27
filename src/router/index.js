import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from'@/pages/Home'
import Search from'@/pages/Search'
import Login from'@/pages/Login'

import Register from'@/pages/Register'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search/:keyword',
            component:Search,
            name:'search',
            
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHander:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHander:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})