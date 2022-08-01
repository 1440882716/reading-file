import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Meeting from '../views/meeting.vue'
// import Files from '../views/files.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'meeting',
    component: Meeting
  },
  {
    path: '/files',
    name: 'files',
    component: () => import(/* webpackChunkName: "about" */ '../views/files.vue')
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
