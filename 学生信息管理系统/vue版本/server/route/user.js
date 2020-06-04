/*
 * @Author: your name
 * @Date: 2020-06-04 20:42:12
 * @LastEditTime: 2020-06-04 22:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\route\user.js
 */ 
const router = require('koa-router')()
const { create, login, findAchievementById, updateMsg, createAchieve, find, updateAchieve, deleteMsg }  = require('../controllers/user')


router.post('/api/create', create)

router.post('/api/createachieve', createAchieve)

router.post('/api/updatemsg/:id', updateMsg) // 通过学号修改信息

router.patch('/api/updateachieve/:id', updateAchieve)// 通过学号修改学生成绩

router.post('/api/login', login) 

router.get('/api/achievement/:id', findAchievementById) // 通过学号查找成绩

router.get('/api/find', find) // 查找所有学生信息和成绩

router.delete('/api/delete/:id', deleteMsg) // 删除学生信息和成绩

module.exports = router.routes()