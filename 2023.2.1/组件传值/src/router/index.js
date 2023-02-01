import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/father',
    name: 'father',
    component: () => import ('../views/Father.vue')
  },
  {
    path: '/fathertwo',
    name: 'fathertwo',
    component: () => import ('../views/fathertwo.vue')
  },
  {
    path: '/provide',
    name: 'provide',
    component: () => import ('../views/provide.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
