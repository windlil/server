const koa = require('koa')

const app = new koa()

app.use((context) => {
  context.body = 'Hello Koa'
})

app.listen(3000)