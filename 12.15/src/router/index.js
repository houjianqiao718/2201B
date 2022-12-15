import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/common/Login.vue")
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("../views/common/Welcome.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/common/Index.vue"),
    children: [
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users/Users.vue"),
        //meta配置路由原信息
        meta: {
          title: ["用户管理", "用户列表"]
        }
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/roles/Roles.vue"),
        meta: {
          title: ["权限管理", "角色列表"]
        }
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/rights/Rights.vue"),
        meta: {
          title: ["权限管理", "权限列表"]
        }
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/common/Reports.vue"),
        meta: {
          title: ["数据统计", "数据报表"]
        }
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/params/Params.vue"),
        meta: {
          title: ["商品管理", "分类参数"]
        }
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/order/Orders.vue"),
        meta: {
          title: ["订单管理", "订单列表"]
        }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/Goods.vue"),
        meta: {
          title: ["商品管理", "商品列表"]
        }
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/categories/Categories.vue"),
        meta: {
          title: ["商品管理", "商品分类"]
        }
      },
      {
        path: "/add",
        name: "add",
        component: () => import("../views/goods/Add.vue"),
        meta: {
          title: ["商品管理", "添加商品"]
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
