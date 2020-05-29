const User = require('../models/user')
const jsonwebtoken = require('jsonwebtoken')
const { secret } = require('../config/keys')

class UserCtl {
  async create(ctx) {
    ctx.body = 'index'
  }

  async login(ctx) {
    const user = await User.findOne(ctx.request.body);
    if (!user) { 
      // ctx.throw(401, '用户名或密码不正确'); 
      return ctx.body = { status: 401, message: '用户名或密码不正确' };
    }
    const { _id, name } = user;
    const token = jsonwebtoken.sign({ _id, name }, secret, { expiresIn: '1d' });
    ctx.body = { status: 200, token};
  }
}

module.exports = new UserCtl