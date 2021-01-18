import * as Router from 'koa-router'

import * as Nedb from 'nedb-promise'

const DB = {
  user: new Nedb({ filename: 'data/user.db', autoload: true, timestampData: true })
}

const router = new Router()

router
  .get('/user', async (ctx) => {
    ctx.body = await DB.user.find({ })
  })
  .post('/user', async (ctx) => {
    const { uuid } = ctx.request.body
    if (uuid) {
      const current = await DB.user.find({ uuid })
      if (current) ctx.body = current
      else ctx.body = await DB.user.insert({ uuid })
    }
  })

export const routes = router.routes()
