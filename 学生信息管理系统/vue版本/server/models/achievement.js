/*
 * @Author: your name
 * @Date: 2020-06-04 20:42:10
 * @LastEditTime: 2020-06-04 23:12:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\models\achievement.js
 */ 
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const achievementSchema = new Schema({
    Id: {
      type: String,
      required: true
    },
    Java: {
      type: Number,
      required: false
    },
    JavaEE: {
      type: Number,
      required: false
    },
    Node:{
      type: Number,
      required: false
    },
    JavaScript: {
      type: Number,
      required: false
    },
    Vue: {
      type: Number,
      required: false
    },
    C: {
      type: Number,
      required: false
    },
    React: {
      type: Number,
      required: false
    }
})

module.exports =  model('achievement', achievementSchema)