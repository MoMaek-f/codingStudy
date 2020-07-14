const Koa = require('koa')
const router = require('./routes')
const cors = require('koa2-cors')
const config = require('./config')


const app =  new Koa()

// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", "*")
//   await next()
// })

app.use(cors())
app.use(router.routes())

app.listen(config.port,() => {
  console.log("server is running at 3000")
})

