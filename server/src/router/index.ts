import { DefaultState, Context } from 'koa'
import * as Router from 'koa-router'

import { controller } from '../controller'
import { path2PascalCaseCached } from '../util'

export const router = new Router<DefaultState, Context>()

router.prefix('/api')

router.get('/test-connect', () => {
  return {
    message: 'success'
  }
})

const api = {
  'GET /user': {},
  'GET /user/:id': {},
  'POST /user': {},
  'GET /note': {},
  'POST /note': {}
}

const matchControllerWithPath = (path: string) => {
  const key = path && path.startsWith('/') ? path.split('/')[1] : ''
  return key.substring(0, 1).toUpperCase() + key.substring(1)
}

Object.entries(api).forEach(([route, options]) => {
  let [httpVerb, path] = route.split(' ')
  httpVerb = httpVerb.toLowerCase()
  const method = controller[matchControllerWithPath(path)][`${httpVerb}`] || controller[matchControllerWithPath(path)][`${httpVerb}${path2PascalCaseCached(path)}`]
  router[httpVerb](path, method)
})

export const routes = router.routes()
