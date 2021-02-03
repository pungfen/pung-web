import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/note',
    component: () => import('@/views/note')
  },
  {
    path: '/note/:user',
    component: () => import('@/views/note/edit')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
