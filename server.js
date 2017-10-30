const path = require('path')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const app = new Koa()
const staticPath = './static'

app.use(KoaStatic(
    path.join(__dirname, staticPath)
))
/**
app.use(async (ctx, next) => {
    await next()

    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>开源说网站正在建设中....</h1>'
})
/**/
app.listen(3000)

console.log('app started at port 3000...')
