const {mysql} = require('../mysql')

async function login(ctx) {
  const value = ctx.request.body
  const data = await mysql('users').where({
      'username': value.username,
      'password': value.password,
  }).select()
  console.log(value)
   
if(data!='') {
  ctx.body = {
    'data': true
  }
}
else {
  ctx.body = {
    'data': false
  }
}  
}

module.exports = {
  login
}
