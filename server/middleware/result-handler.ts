import { Context, Next } from 'koa'

export type ResultInfo = {
  code?: number
  msg?: string
  data?: any
  err?: any
}

type MiddleWare = (
  ...arg: any[]
) => (ctx: Context, next?: Next) => Promise<void>

export const ResultHandler: MiddleWare = () => async (ctx, next) => {
  const r: ResultInfo = { code: 0 }
  try {
    const data = await next()
    r.code = 0
    r.msg = 'success'
    r.data = data
  } catch (err) {}

  ctx.body = r
}
