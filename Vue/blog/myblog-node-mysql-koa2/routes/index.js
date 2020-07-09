const router = require('koa-router')()
const { mysql } = require('../mysql')

const article = require('../controllers/article.js')


router.get('/getarticle', article.getArticle)
router.get('/getNewestArticle', article.getNewestArticle)
router.get('/getArticleById', article.getArticleById)
router.get('/getMyMess', article.getMyMess)

module.exports = router
