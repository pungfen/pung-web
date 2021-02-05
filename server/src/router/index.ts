import { DefaultState, Context } from 'koa'
import * as Router from 'koa-router'

import { controller } from '../controller'
import { path2PascalCaseCached } from '../util/shared'

export const router = new Router<DefaultState, Context>()

router.prefix('/api')

const api = {
  'GET /note': {}
}

const matchControllerWithPath = (path: string) => {
  const key = path && path.startsWith('/') ? path.split('/')[1] : ''
  return key.substring(0, 1).toUpperCase() + key.substring(1)
}

Object.entries(api).forEach(([route, options]) => {
  let [httpVerb, path] = route.split(' ')
  httpVerb = httpVerb.toLowerCase()
  router[httpVerb](path, controller[matchControllerWithPath(path)][`${httpVerb}${path2PascalCaseCached(path)}`])
})

export const routes = router.routes()
