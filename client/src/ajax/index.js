import axios from 'axios'

import proxy from './proxy'
import { path2PascalCaseCached } from '@/util'

// import { Message } from 'element-plus'

const intsance = axios.create({})

intsance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (err) => {
    return Promise.reject(err)
  }
)

const ajax = {}

Object.entries({ proxy }).forEach(([type, routes]) => {
  console.log(type)
  Object.entries(routes).forEach(([action, option]) => {
    let [httpVerb, path] = action.split(' ')
    httpVerb = httpVerb.toLowerCase()
    ajax[`${httpVerb}${path2PascalCaseCached(path)}`] = (...arg) => {
      let index = 0
      let routerPath = '/api'
      path.split('/').forEach((item) => {
        if (item.startsWith(':')) routerPath += arg[index++]
        else routerPath += item
        routerPath += '/'
      })
      routerPath = routerPath.slice(0, -1)
      const params = httpVerb === 'get' || httpVerb === 'delete' ? { params: arg[index++] } : { data: arg[index++] }
      return intsance[httpVerb](routerPath, params)
    }
  })
})

export default ajax
