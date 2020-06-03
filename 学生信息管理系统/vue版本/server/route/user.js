/*
 * @Author: your name
 * @Date: 2020-06-03 21:49:32
 * @LastEditTime: 2020-06-03 22:02:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\route\user.js
 */ 
const router = require('koa-router')()
const { create, login, findAchievementById, updateMsg, createAchieve, find, updateAchieve }  = require('../controllers/user')


router.post('/api/create', create)
router.post('/api/createachieve', createAchieve)
router.patch('/api/updatemsg/:id', updateMsg)
router.patch('/api/updateachieve/:id', updateAchieve)

router.post('/api/login', login)

router.get('/api/achievement/:id', findAchievementById)
router.get('/api/find', find)   //查找所有的信息

module.exports = router.routes()