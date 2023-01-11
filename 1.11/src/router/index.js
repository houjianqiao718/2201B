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
        path: "/Staffsee",
        name: "Staffsee",
        component: () => import("../views/Two/Staffsee.vue")
      },
      {
        path: "/StaffImport",
        name: "StaffImport",
        component: () => import("../views/Two/StaffImport.vue")
      },
      {
        path: "/Setup",
        name: "Setup",
        component: () => import("../views/Three/Setup.vue")
      },
      {
        path: "/Permission",
        name: "Permission",
        component: () => import("../views/Four/Permission.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
