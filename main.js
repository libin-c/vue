import Vue from 'vue'
import App from './App.vue' 
import router from './routers/router.js'

new Vue({
    el:'#app',
    router,  //使用路由
    render:function (create) {
        return create(App)
        
    }
})