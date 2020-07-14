const router = require('koa-router')()

const article = require('../controllers/article.js')


router.get('/getarticle', article.getArticle)
router.get('/getNewestArticle', article.getNewestArticle)
router.get('/getArticleById', article.getArticleById)
router.get('/getMyMess', article.getMyMess)
router.get('/getArticleByType', article.getArticleByType)

module.exports = router
