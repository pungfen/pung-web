import fs from 'fs'
import path from 'path'
import * as Router from 'koa-router'

type PathMeta = {
  name: string
  path: string
}

type RouteMeta = {
  name: string
  method: string
  path: string
  isVerify: boolean
}

const router = new Router()

const modules: ObjectConstructor[] = []

const ctrPath = path.join(__dirname, 'controller')

fs.readdirSync(ctrPath).forEach((name) => {
  if (/^[^.]+\.(t|j)s$/.test(name)) {
    modules.push(require(path.join(ctrPath, name)).default)
  }
})

modules.forEach((m) => {
  const routeMap: RouteMeta[] = Reflect.getMetadata(ROUTE_MAP, m, 'method') || []
  const basePathMap: PathMeta[] = Reflect.getMetadata(BASE_PATH_MAP, m) || []
  const basePath: PathMeta = basePathMap.pop()
  if (routeMap.length) {
    const ctr = new m()
    routeMap.forEach((route) => {
      const { name, method, path } = route
      const newPath: String = basePath ? basePath.path + path : path
      router[method](newPath, ctr[name])
    })
  }
})

export const routes = router.routes()
