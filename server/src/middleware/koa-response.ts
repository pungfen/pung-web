import { Response, MiddleWare } from '../@types/types'

import { isPlainObject } from '../util/shared'

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
