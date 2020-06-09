/*
 * @Author: your name
 * @Date: 2020-06-05 14:49:58
 * @LastEditTime: 2020-06-09 09:28:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\controllers\user.js
 */ 
const User = require('../models/user')
const Achievement = require('../models/achievement')
const Admin = require('../models/Admin')
const jsonwebtoken = require('jsonwebtoken')
const { secret } = require('../config/keys')

class UserCtl {
  // 注册学生
  async create(ctx) {
    console.log(ctx.request.body);
    const user = await new User(ctx.request.body).save();
    ctx.body = { user }
  }
  async createAdmin(ctx) {
    const user = await new Admin(ctx.request.body).save();
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
      const user = await Admin.findOne(ctx.request.body);
      if (user) {
        return ctx.body = { status: 200, user };
      }
      return ctx.body = { status: 401, message: '用户名或密码不正确' };
    }
    // const { _id, name } = user;
    // const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: '1d' });
    ctx.body = { status: 200, user };
  }
  // 修改学生信息
  async updateMsg(ctx) {
    console.log(ctx.params.id, 'update')
    console.log(ctx.request.body)
    let Id = ctx.params.id
    const user = await User.findOneAndUpdate({ Id }, ctx.request.body)
    // const user = await User.findOneAndUpdate(Id, ctx.request.body);
    console.log(user)
    if (!user) { ctx.throw(404, '用户不存在'); }
    ctx.body = { status: 200, msg: '修改成功' };
  }

  async findMsgById(ctx) {
    const Id = ctx.params.id
    const user = await User.findOne({ Id })
    if (!user) {
      return ctx.body = { status: 400, msg: '学号不存在' }
    }
    // let msg = [user]
    ctx.body = { status: 200, user }
    // console.log(msg)
  }

  async findAchievementById(ctx) {
    const Id = ctx.params.id
    const result = await Achievement.findOne({ Id })
    ctx.body = { status: 200, result }
  }

  async find(ctx) {
    const msg = await User.find()
    const achieve = await Achievement.find()
    ctx.body = { status: 200, msg, achieve }
  }

  async updateAchieve(ctx) {
    const id = ctx.params.id
    const result = await Achievement.findOneAndUpdate({ id }, ctx.request.body)
    console.log(result);

    ctx.body = { status: 200, msg: '修改成功' }
  }

  async deleteMsg(ctx) {
    const Id = ctx.params.id
    const result = await User.findOneAndDelete({ Id })
    const res = await Achievement.findOneAndDelete({ Id })
    ctx.body = { status: 200, msg: '删除成功' }
  }

}

module.exports = new UserCtl