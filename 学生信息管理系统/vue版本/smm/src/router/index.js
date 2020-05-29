/*
 * @Author: your name
 * @Date: 2020-05-27 23:16:14
 * @LastEditTime: 2020-05-29 09:14:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\smm\src\router\index.js
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '*',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/home/homePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
