import { Next } from 'koa'
import { Context } from 'vm'

type MiddleWare = (
  ...arg: any[]
) => (ctx: Context, next?: Next) => Promise<void>

export { MiddleWare }
