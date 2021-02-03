import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/note' }
].map(
  route => {
    return Object.assign(route, { component: () => import(`@/views${route.path}`) })
  }
)

console.log(routes)

export default createRouter(
  {
    history: createWebHistory('/'),
    routes
  }
)
