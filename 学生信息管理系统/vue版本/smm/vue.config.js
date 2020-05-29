/*
 * @Author: your name
 * @Date: 2020-05-29 09:06:44
 * @LastEditTime: 2020-05-29 09:21:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\smm\vue.config.js
 */ 
module.exports = {
  lintOnSave: false,
  devServer: {
      host: '0.0.0.0', // ip
      port: 8080, // 设置端口号
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      proxy:null  //设置代理
  }
}