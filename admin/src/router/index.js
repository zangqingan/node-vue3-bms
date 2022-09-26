// 1. 引入
import { createRouter, createWebHistory } from 'vue-router'

// 2.定义路由表
const routes = [
  {
    path:'/',
    redirect: '/dashboard'
  },
  {
    path:'/',
    name:'Home',
    // 懒加载
    component: () => import('@/views/home/home.vue'),
    children:[
      {
        path:'/dashboard',
        name:'Dashboard',
        meta:{
          title:'系统首页'
        },
        component: () => import('@/views/dashboard/dashboard.vue')
      }
    ]
  }
]

// 3.创建实例
const router = createRouter({
  history:createWebHistory(),
  routes
})

// 4.导出路由实例
export default router