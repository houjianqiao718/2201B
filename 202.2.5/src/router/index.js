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
      },
      {
        path: "/StaffIn",
        name: "StaffIn",
        component: () => import("../views/Three/StaffIn.vue")
      },
      {
        path: "/Staffsee",
        name: "Staffsee",
        component: () => import("../views/Three/Staffsee.vue")
      },
      {
        path: "/StaffImport",
        name: "StaffImport",
        component: () => import("../views/Three/StaffImport.vue")
      },
      {
        path: "/Setup",
        name: "Setup",
        component: () => import("../views/Four/Setup.vue")
      },
      {
        path: "/Permission",
        name: "Permission",
        component: () => import("../views/Five/Permission.vue")
      },
      {
        path: "/Security",
        name: "Security",
        component: () => import("../views/Six/Security.vue")
      },
      {
        path: "/Sechistory",
        name: "Sechistory",
        component: () => import("../views/Six/Sechistory.vue")
      },
      {
        path: "/SecMonreport",
        name: "SecMonreport",
        component: () => import("../views/Six/SecMonreport.vue")
      },
      {
        path: "/Secdetail",
        name: "Secdetail",
        component: () => import("../views/Six/Secdetail.vue")
      },
      {
        path: "/Approval",
        name: "Approval",
        component: () => import("../views/Seven/Approval")
      },
      {
        path: "/SecuritySetting",
        name: "SecuritySetting",
        component: () => import("../views/Seven/SecuritySetting")
      },
      {
        path: "/Appsee",
        name: "Appsee",
        component: () => import("../views/Seven/Appsee")
      },
      {
        path: "/Attendance",
        name: "Attendance",
        component: () => import("../views/Eight/Attendance")
      },
      {
        path: "/Attimport",
        name: "Attimport",
        component: () => import("../views/Eight/Attimport")
      },
      {
        path: "/Atthistory",
        name: "Atthistory",
        component: () => import("../views/Eight/Atthistory")
      },
      {
        path: "/Atrtreport",
        name: "Atrtreport",
        component: () => import("../views/Eight/Atrtreport")
      },
      {
        path: "/Wages",
        name: "Wages",
        component: () => import("../views/Nine/Wages")
      },
      {
        path: "/Setting",
        name: "Setting",
        component: () => import("../views/Nine/Setting")
      },
      {
        path: "/Wagreport",
        name: "Wagreport",
        component: () => import("../views/Nine/Wagreport")
      },
      {
        path: "/Seesalary",
        name: "Seesalary",
        component: () => import("../views/Nine/Seesalary")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
