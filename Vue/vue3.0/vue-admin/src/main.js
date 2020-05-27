/*
 * @Author: your name
 * @Date: 2020-05-26 22:15:48
 * @LastEditTime: 2020-05-26 23:49:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3.0\vue-admin\src\main.js
 */ 
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
