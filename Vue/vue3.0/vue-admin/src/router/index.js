/*
 * @Author: your name
 * @Date: 2020-05-26 22:15:48
 * @LastEditTime: 2020-05-26 23:12:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0\vue-admin\src\router\index.js
 */ 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "login",
    component: () =>import("../views/login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
