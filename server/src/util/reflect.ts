import 'reflect-metadata'

import { BASE_PATH_MAP, ROUTER_MAP } from './const'

/**
 * @desc 创建http method 装饰器
 * @param {string} method - http method， 如 get,post,put
 * @return Decorator - 装饰器
 */

function methodDecorator(method: string) {
  return function httpMethodDecorator(path: string) {
    return (proto: any, name: string) => {
      const target = proto.constructor
      const routeMap = Reflect.getMetadata(ROUTER_MAP, target, 'method') || []
      routeMap.push({ name, method, path })
      Reflect.defineMetadata(ROUTER_MAP, routeMap, target, 'method')
    }
  }
}

/**
 * @desc 创建类路径装饰器
 * @param className 装饰器接受路由 path 作为参数
 * @return Decorator - 装饰器
 */
function classDecorator() {
  return function httpMethodDecorator(basePath: string): ClassDecorator {
    return (proto: any) => {
      const target = proto
      const pathMap = Reflect.getMetadata(BASE_PATH_MAP, target) || []
      pathMap.push({ path: basePath })
      Reflect.defineMetadata(BASE_PATH_MAP, pathMap, target)
    }
  }
}

export const prefix = classDecorator()

export const get = methodDecorator('get')
export const post = methodDecorator('post')
export const put = methodDecorator('put')
