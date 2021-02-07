import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/index')
  },
  {
    path: '/note',
    component: () => import('@/views/note')
  },
  {
    path: '/note/:uuid',
    name: 'note-uuid',
    component: () => import('@/views/note/edit')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
