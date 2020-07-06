const router = require('koa-router')()
const {mysql} = require('../mysql')

router.get('/getarticle', async  (ctx) => {
    var results = await mysql('article_list').select()

    var dataString = JSON.stringify(results);
    var data = JSON.parse(dataString);

    console.log(data)
    ctx.body = { 
      data: data,
      status: 200
    }
})

module.exports = router
