/*
 * @Author: your name
 * @Date: 2020-06-05 14:49:59
 * @LastEditTime: 2020-06-05 18:31:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \学生信息管理系统\vue版本\server\route\user.js
 */ 
const router = require('koa-router')()
const { createAdmin, findMsgById,create, login, findAchievementById, updateMsg, createAchieve, find, updateAchieve, deleteMsg }  = require('../controllers/user')


router.post('/api/create', create)

router.post('/api/createAdmin', createAdmin)

router.post('/api/createachieve', createAchieve)

router.post('/api/updatemsg/:id', updateMsg) // 通过学号修改信息

router.post('/api/updateachieve/:id', updateAchieve)// 通过学号修改学生成绩

router.post('/api/login', login) 

router.get('/api/achievement/:id', findAchievementById) // 通过学号查找成绩

router.get('/api/findmsgbyid/:id', findMsgById) // 通过学号查找学生信息

router.get('/api/find', find) // 查找所有学生信息和成绩

router.delete('/api/delete/:id', deleteMsg) // 删除学生信息和成绩

module.exports = router.routes()