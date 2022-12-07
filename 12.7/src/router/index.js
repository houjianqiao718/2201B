import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Welcome.vue")
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/Users.vue"),
        //meta配置路由原信息
        meta: {
          title: ["用户管理", "用户列表"]
        }
      }
    ]
  }
];
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
