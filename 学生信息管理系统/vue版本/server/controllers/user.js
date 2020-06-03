/*
 * @Author: your name
 * @Date: 2020-06-03 21:49:31
 * @LastEditTime: 2020-06-03 22:14:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\controllers\user.js
 */ 
const User = require('../models/user')
const Achievement = require('../models/achievement')
const jsonwebtoken = require('jsonwebtoken')
const { secret } = require('../config/keys')

class UserCtl {
  // 注册学生
  async create(ctx) {
    console.log(ctx.request.body);
    const user = await new User(ctx.request.body).save();
    ctx.body = { user }
  }
  // 注册学生成绩
  async createAchieve(ctx) {
    const result = await new Achievement(ctx.request.body).save();
    ctx.body = { result }
  }
  // 登录
  async login(ctx) {
    const user = await User.findOne(ctx.request.body);
    if (!user) { 
      // ctx.throw(401, '用户名或密码不正确'); 
      return ctx.body = { status: 401, message: '用户名或密码不正确' };
    }
    const { _id, name, Identity } = user;
    const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: '1d' });
    ctx.body = { status: 200, token, Identity};
  }
  // 修改学生信息
  async updateMsg(ctx) {
    const user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    if (!user) { ctx.throw(404, '用户不存在'); }
    ctx.body = {status: 200, msg: '修改成功'};
  }

  async findAchievementById(ctx) {
    const id = ctx.params.id
    const result = await Achievement.findOne({ id })
    ctx.body = {status: 200, result}
  }
  async find(ctx) {
    const msg = await User.find()
    const achieve = await Achievement.find()
    ctx.body = {status: 200, msg, achieve}
  }
  async updateAchieve(ctx) {
    const id = ctx.params.id
    const result = await Achievement.findOneAndUpdate({id}, ctx.request.body)
    console.log(result);
    
    ctx.body = {status: 200, msg: '修改成功'}
  }
}

module.exports = new UserCtl