const Koa = require("koa")
const app = new Koa()

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>开源说网站正在建设中...</h1>'
})

app.listen(80)

console.log('app started at port 80...')