import * as Router from 'koa-router'

import * as Nedb from 'nedb'

// import { db, datastore } from '../lib/nedb'

const DB = {
  user: new Nedb({
    filename: 'data/user.db',
    autoload: true,
    timestampData: true,
  }),
  // note: Nedb.datastore({
  //   filename: 'data/note.db',
  //   autoload: true,
  //   timestampData: true,
  // }),
}

const router = new Router()

router.get('/user', async (ctx) => {
  ctx.body = await thenify(DB.user.find({}, (err, res) => res))
})
// .get('/note', async (ctx) => {
//   ctx.body = await DB.note.find({})
// })
// .post('/user', async (ctx) => {
//   const { uuid } = ctx.request.body
//   if (uuid) {
//     const current = await DB.user.find({ uuid })
//     if (current) ctx.body = current
//     else ctx.body = await DB.user.insert({ uuid })
//   }
// })

export const routes = router.routes()
