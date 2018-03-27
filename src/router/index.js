import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: resolve => require(['@/views/list'], resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: resolve => require(['@/views/list'], resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path:"/detail",
      name:'detail',
      component: resolve => require(['@/views/detail'],resolve)
    }
  ]




})
