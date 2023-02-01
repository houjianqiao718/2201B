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
        path: "/Structure",
        name: "Structure",
        component: () => import("../views/Two/Structure")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
