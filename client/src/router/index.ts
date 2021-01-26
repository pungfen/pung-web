import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('../views/home.vue'),
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('../views/about.vue'),
//   },
//   {
//     path: '/note',
//     name: 'Note',
//     component: () => import('../views/note/index.vue'),
//   },
//   {
//     path: '/admin',
//     name: 'Admin',
//     children: [
//       {
//         path: '/note',
//         name: 'Note',
//         component: () => import('../views/note/index.vue'),
//       },
//     ],
//   },
// ]

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('../views/admin/login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/index.vue'),
    children: [
      {
        path: '/admin/note',
        component: () => import('../views/admin/note/index.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
