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
      },
      {
        path: "/Security",
        name: "Security",
        component: () => import("../views/Five/Security.vue")
      },
      {
        path: "/Sechistory",
        name: "Sechistory",
        component: () => import("../views/Five/Sechistory.vue")
      },
      {
        path: "/SecMonreport",
        name: "SecMonreport",
        component: () => import("../views/Five/SecMonreport.vue")
      },
      {
        path: "/Secdetail",
        name: "Secdetail",
        component: () => import("../views/Five/Secdetail.vue")
      },
      {
        path: "/Approval",
        name: "Approval",
        component: () => import("../views/Six/Approval")
      },
      {
        path: "/SecuritySetting",
        name: "SecuritySetting",
        component: () => import("../views/Six/SecuritySetting")
      },
      {
        path: "/Appsee",
        name: "Appsee",
        component: () => import("../views/Six/Appsee")
      },
      {
        path: "/Attendance",
        name: "Attendance",
        component: () => import("../views/Seven/Attendance")
      },
      {
        path: "/Attimport",
        name: "Attimport",
        component: () => import("../views/Seven/Attimport")
      },
      {
        path: "/Atthistory",
        name: "Atthistory",
        component: () => import("../views/Seven/Atthistory")
      },
      {
        path: "/Atrtreport",
        name: "Atrtreport",
        component: () => import("../views/Seven/Atrtreport")
      },
      {
        path: "/Wages",
        name: "Wages",
        component: () => import("../views/Eight/Wages")
      },
      {
        path: "/Setting",
        name: "Setting",
        component: () => import("../views/Eight/Setting")
      },
      {
        path: "/Wagreport",
        name: "Wagreport",
        component: () => import("../views/Eight/Wagreport")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
