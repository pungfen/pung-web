import * as Router from 'koa-router'

const nedb = require('../lib/nedb')

const DB = {
  user: nedb({
    filename: 'data/user.db',
    autoload: true,
    timestampData: true
  }),

  note: nedb({
    filename: 'data/note.db',
    autoload: true,
    timestampData: true
  })
}

const router = new Router()

router
  .prefix('/api')

  .get('/user', async (ctx) => {
    ctx.body = await DB.user.find({})
  })
  .post('/user', async (ctx) => {
    const { uuid } = ctx.request.body
    if (uuid) {
      const current = await DB.user.find({ uuid })
      if (current) ctx.body = current
      else ctx.body = await DB.user.update({ uuid })
    }
  })

  .get('/note', async (ctx) => {
    ctx.body = await DB.note.find({})
  })
  .get('/note/:uuid', async (ctx) => {
    const { uuid } = ctx.request.body
    ctx.body = await DB.note.find({ uuid })
  })
  .post('/note', async (ctx) => {
    const { uuid, content } = ctx.request.body
    // if (uuid) {
    //   const user = await
    // }
    if (content) {
      ctx.body = await DB.note.update({ uuid }, { $set: { content } })
    } else {
      ctx.body = []
    }
  })

export const routes = router.routes()
