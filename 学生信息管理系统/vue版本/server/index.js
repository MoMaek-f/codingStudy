const Koa = require('koa')
const { port, dbUrl } = require('./config/keys')
const routes = require('./route/user')
const mongoose = require('mongoose')
const body = require('koa-body')
const cors = require('koa-cors')

const app  = new Koa()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, ()=>console.log('数据库连接成功'))
mongoose.connection.on('error', console.error)

app.use(cors())
app.use(body())
app.use(routes)

app.listen(port, () => {
  console.log(`${port} port is running`);
})