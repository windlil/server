const Koa = require('koa')
const Router = require('@koa/router')

const { DEFAULT_PORT } = require('./config/config')

const router = new Router()
const app = new Koa()

router.get('/', (context) => {
  context.body = 'Hello Koa'
})
router.get('/users', (ctx) => {
  ctx.body = 'users'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(DEFAULT_PORT, () => {
  console.log(`server running on http://localhost:${DEFAULT_PORT}`)
})