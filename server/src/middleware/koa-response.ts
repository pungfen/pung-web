import { Context, Next } from 'koa'

import { isPlainObject } from '../util/shared'

export type Response = {
  message?: string
  data?: any
  meta?: any
  err?: any
}

type MiddleWare = (...arg: any[]) => (ctx: Context, next?: Next) => Promise<void>

export const koaResponse: MiddleWare = () => async (ctx, next) => {
  const result: Response = {}
  let statusCode: number = 0
  try {
    const res: any = await next()
    statusCode = res.code || 200
    result.message = res.message || 'success'
    result.data = isPlainObject(res.data) ? [res.data] : res.data
    result.meta = res.meta
  } catch (err) {}
  ctx.status = statusCode
  ctx.body = result
}
