import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/note',
    component: () => import('../views/note/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/admin/login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/index.vue'),
    children: [
      {
        path: '/admin/note',
        component: () => import('../views/admin/note/index.vue')
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
