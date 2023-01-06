import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/common/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/common/AboutView.vue'),
    children: [
      {
        path: '/Homepage',
        name: 'Homepage',
        component: () => import('../views/One/Homepage.vue')
      },
      {
        path: '/Structure',
        name: 'Structure',
        component: () => import('../views/Two/StrucTure.vue')
      },
      {
        path: '/Staff',
        name: 'Staff',
        component: () => import('../views/Three/Staff.vue')
      },
      {
        path: '/Company',
        name: 'Company',
        component: () => import('../views/Four/Company.vue')
      },
      {
        path: '/Jurisdiction',
        name: 'Jurisdiction',
        component: () => import('../views/Five/Jurisdiction.vue')
      },
      {
        path: '/Attendance',
        name: 'Attendance',
        component: () => import('../views/Six/Attendance.vue')
      },
      {
        path: '/Wages',
        name: 'Wages',
        component: () => import('../views/Seven/Wages.vue')
      },
      {
        path: '/Approval',
        name: 'Approval',
        component: () => import('../views/Eight/Approval.vue')
      },
      {
        path: '/SecuritySetting',
        name: 'SecuritySetting',
        component: () => import('../views/Eight/SecuritySetting.vue')
      },
      {
        path: '/Appsee',
        name: 'Appsee',
        component: () => import('../views/Eight/Appsee.vue')
      },
      {
        path: '/Security',
        name: 'Security',
        component: () => import('../views/Nine/Security.vue')
      },
      {
        path: '/Secdetail',
        name: 'Secdetail',
        component: () => import('../views/Nine/Secdetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
