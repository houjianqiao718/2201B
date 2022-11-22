import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/manage',
        name: 'manage',
        component: () => import ('../views/manage.vue')
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import ('../views/userList.vue'),
        //meta配置路由原信息
        meta: {title: ['数据管理','用户列表']}
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import ('../views/shopList.vue'),
        //meta配置路由原信息
        meta: {title: ['数据管理','商家列表']}
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import ('../views/foodList.vue'),
        //meta配置路由原信息
        meta: {title: ['数据管理','食品列表']}
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import ('../views/orderList.vue'),
        //meta配置路由原信息
        meta: {title: ['数据管理','订单列表']}
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import ('../views/adminList.vue'),
        //meta配置路由原信息
        meta: {title: ['数据管理','管理员列表']}
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: () => import ('../views/addGoods.vue'),
        //meta配置路由原信息
        meta: {title: ['添加数据','添加商品']}
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import ('../views/addShop.vue'),
        //meta配置路由原信息
        meta: {title: ['添加数据','添加商铺']}
      },
      {
        path: '/visitor',
        name: 'visitor',
        component: () => import ('../views/visitor.vue'),
        //meta配置路由原信息
        meta: {title: ['图表','用户分布']}
      },
      {
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import ('../views/vueEdit.vue'),
        //meta配置路由原信息
        meta: {title: ['编辑','文本编辑']}
      },
      {
        path: '/adminSet',
        name: 'adminSet',
        component: () => import ('../views/adminSet.vue'),
        //meta配置路由原信息
        meta: {title: ['设置','管理员设置']}
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import ('../views/explain.vue'),
        //meta配置路由原信息
        meta: {title: ['说明','说明']}
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
