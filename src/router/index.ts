import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Meeting from '../views/meeting.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Meeting',
    component: () => import(/* webpackChunkName: "about" */ '../views/meeting.vue'),
    meta: { title: "会议阅文" },
  },
  {
    path: '/files',
    name: 'files',
    component: () => import(/* webpackChunkName: "about" */ '../views/files.vue'),
    meta: { title: "会议阅文" },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
