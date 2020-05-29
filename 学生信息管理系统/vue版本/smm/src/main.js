/*
 * @Author: your name
 * @Date: 2020-05-27 23:16:14
 * @LastEditTime: 2020-05-29 13:32:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\smm\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
