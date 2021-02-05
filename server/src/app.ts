import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as bodyparser from 'koa-bodyparser'

import { config } from './config'
import { router, routes } from './router'

import { koaResponse } from './middleware/koa-response'

const start = () =>
  new Promise<void>(async (resolve, reject) => {
    try {
      console.info('--- start ---')

      const app = new Koa()

      app.use(logger())
      app.use(
        bodyparser({
          onerror: (err, ctx) => {
            ctx.throw(`body parser error：${err}`, 422)
          }
        })
      )
      app.use(async (ctx, next) => {
        if (ctx.request.path === '/') {
          ctx.response.status = 200
          ctx.response.body = ''
        }
        await next()
      })
      app.use(koaResponse())
      app.use(routes)
      app.use(router.allowedMethods())

      app.listen(config.port, resolve)
    } catch (err) {
      reject(err)
    }
  })

start()
  .then(() => {
    console.log(`pung-web-server start success, listening on http://localhost:${config.port}`)
  })
  .catch((e) => {
    console.log(e)
    process.exit(-1)
  })
