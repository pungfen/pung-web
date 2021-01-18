import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'

import { routes } from './router'
import { config } from './config'

export const start = () => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      console.info('--- start ---')

      const app = new Koa()
      const port = config.port

      app.use(bodyParser())
      app.use(routes)
      app.listen(port, resolve)
    } catch (err) {
      reject(err)
    }
  })
}

start().catch((e) => {
  console.error(e)
  process.exit(-1)
})
