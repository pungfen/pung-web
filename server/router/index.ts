import * as Router from 'koa-router'

const router = new Router()

router.get('/:id', async (ctx) => {
  const { id } = ctx.params
  ctx.body = `获取id为${id}的用户`
})

export const routes = router.routes()
