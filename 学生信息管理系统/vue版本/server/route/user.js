const router = require('koa-router')()
const { create, login }  = require('../controllers/user')

/**
 * @route POST api/create
 * @desc 注册接口
 * @access 接口是公开的
 */
router.post('/api/create', create)

/**
 * @route POST api/login
 * @desc 注册接口
 * @access 接口是公开的
 */
router.post('/api/login', login)

module.exports = router.routes()