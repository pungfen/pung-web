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
  'POST /user': {},
  'GET /note': {},
  'GET /note/:uuid': {},
  'POST /note/:uuid': {},
  'PUT /note/:uuid': {}
}

const matchControllerWithPath = (path: string) => {
  const key = path && path.startsWith('/') ? path.split('/')[1] : ''
  return key.substring(0, 1).toUpperCase() + key.substring(1)
}

const matchMethodWithPathAndVerb = (path: string, verb: string) => {
  let methodName = verb
  path.split('/').forEach((item) => {
    if (item.startsWith(':')) methodName += path2PascalCaseCached('/' + item.substring(1))
  })
  return methodName
}

Object.entries(api).forEach(([route, options]) => {
  let [httpVerb, path] = route.split(' ')
  httpVerb = httpVerb.toLowerCase()
  const method = controller[matchControllerWithPath(path)][matchMethodWithPathAndVerb(path, httpVerb)] || controller[matchControllerWithPath(path)][`${httpVerb}${path2PascalCaseCached(path)}`]
  router[httpVerb](path, method)
})

export const routes = router.routes()
