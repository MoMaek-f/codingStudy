const router = require('koa-router')()
const { mysql } = require('../mysql')

const article = require('../controllers/article.js')

// router.get('/getarticle', async  (ctx) => {
//     var results = await mysql('article_list').select()

//     var dataString = JSON.stringify(results);
//     var data = JSON.parse(dataString);

//     console.log(data)
//     ctx.body = { 
//       data: data,
//       status: 200
//     }
// })

router.get('/getarticle', article.getArticle)
router.get('/getNewestArticle', article.getNewestArticle)

module.exports = router
