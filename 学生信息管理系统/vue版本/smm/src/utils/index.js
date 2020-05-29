/*
 * @Author: your name
 * @Date: 2020-05-28 21:49:25
 * @LastEditTime: 2020-05-28 21:54:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\smm\src\utils\index.js
 */ 
// 封装接口
const host = "http://localhost:6500"
export { host };


export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}
