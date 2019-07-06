import Vue from 'vue'
import Router from 'vue-router'
import Child1 from '../components/Child1.vue'
import Child2 from '../components/Child2.vue'

Vue.use(Router)
export default new Router({
    // 定义匹配规则
    // mode: 'history',
    // 防止路由匹配中#的出现
    routes:[
       {
           path:'/',  // 匹配根路径／，加载Chiled1中的内容
           component:Child1
       },
       {
           path:'child2',
           component:Child2
       }
   ]
})