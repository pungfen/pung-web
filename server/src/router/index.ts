import { DefaultState, Context } from 'koa'
import * as Router from 'koa-router'
import KoaSwagger from 'koa2-swagger-ui'

import * as fs from 'fs'
import * as path from 'path'

import { BASE_PATH_MAP, ROUTER_MAP } from '../util/const'

type RouteMeta = {
  name: string
  method: string
  path: string
  isVerify: boolean
}

type PathMeta = {
  name: string
  path: string
}

export const router = new Router<DefaultState, Context>()

router
  .use(KoaSwagger({ swaggerOptions: { spec } }))
  .prefix('/api')

  .get('/text-connect', (ctx) => {
    ctx.body = 'Hello! Pung'
  })

const modules: ObjectConstructor[] = []

const controllerPath = path.join(__dirname, '../controller')
fs.readdirSync(controllerPath).forEach((name) => {
  if (/^[^.]+\.(t|j)s$/.test(name)) modules.push(require(path.join(controllerPath, name)).default)
})

modules.forEach((m) => {
  const routerMap: RouteMeta[] = Reflect.getMetadata(ROUTER_MAP, m, 'method') || []
  const basePathMap: PathMeta[] = Reflect.getMetadata(BASE_PATH_MAP, m) || []
  const basePath = basePathMap.pop() // @prefix('user')
  if (routerMap.length) {
    const ctr = new m()
    routerMap.forEach((route) => {
      route.path = route.path
      const { name, method, path } = route
      const strPath = basePath ? `${basePath.path}/${path}` : path
      const url =
        '/' +
        strPath
          .split('/')
          .filter((str) => !!str)
          .join('/')
      router[method](url, ctr[name])
    })
  }
})

export const routes = router.routes()
