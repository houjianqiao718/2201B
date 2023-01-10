import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/Common/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/Common/AboutView.vue"),
    children: [
      {
        path: "/userIndex",
        name: "userIndex",
        component: () => import("../views/One/userIndex.vue")
      },
      {
        path: "/Myinfor",
        name: "Myinfor",
        component: () => import("../views/One/Myinfor.vue")
      },
      {
        path: "/StaffIn",
        name: "StaffIn",
        component: () => import("../views/Two/StaffIn.vue")
      },
      {
        path: "/check",
        name: "check",
        component: () => import("../views/Two/check.vue")
      },
      {
        path: "/uploading",
        name: "uploading",
        component: () => import("../views/Two/uploading.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
