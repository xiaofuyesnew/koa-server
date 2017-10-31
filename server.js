const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controller = require('./controller')
const cors = require('koa-cors')
const KoaStatic = require('koa-static')
const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

app.use(bodyParser())

app.use(cors())

app.use(controller())

app.use(KoaStatic(
    path.join(__dirname, './static')
))

app.listen(3000)

console.log('app started at port 3000...')
