import { Context, Next } from 'koa'

export type Response = {
  message?: string
  data?: any
  meta?: any
  err?: any
}

export type MiddleWare = (...arg: any[]) => (ctx: Context, next?: any) => Promise<void>
