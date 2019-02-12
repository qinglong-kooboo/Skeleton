import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('../pages/index.vue')
const test = () => import('../pages/test.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: index, meta: {title: '首页'}},
    {path: '/index', component: index, meta: {title: '首页'}},
    {path: '/test', component: test, meta: {title: '测试'}}
  ]
})
