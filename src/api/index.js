//这个文件写的都是函数,我们叫接口请求函数
// 以后,我们的每个接口都对应了一个函数,如果想要拿相关接口的数据,只需要调用相关的接口请求函数
// axios使用   函数用法  对象用法
// 三种参数 
import request from './ajax'


export const reqCategoryList=()=>{
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
      })
}

