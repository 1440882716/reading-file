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
    path: '/meetingDetail',
    name: 'meetingDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/meetingDetail.vue'),
    meta: { title: "会议详情" },
  },
  {
    path: '/fileDetail',
    name: 'fileDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/fileDetail.vue'),
    meta: { title: "文件详情" },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "about" */ '../views/forget.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
