import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/common/HomeView.vue"

Vue.use(VueRouter)

const routes = [{
		path: "/",
		name: "home",
		redirect: "welcome",
		component: HomeView,
		children: [{
				path: "welcome",
				name: "welcome",
				component: () => import("../views/common/Welcome.vue")
			},
			{
				path: "users",
				name: "users",
				meta: ["用户管理", "用户列表"],
				component: () => import("../views/Users/Users.vue")
			},
			{
				path: "roles",
				name: "roles",
				meta: ["权限管理", "角色列表"],
				component: () => import("../views/Roles/Roles.vue")
			},
			{
				path: "rights",
				name: "rights",
				meta: ["权限管理", "权限列表"],
				component: () => import("../views/Roles/Rights.vue")
			},
			{
				path: 'goods',
				name: "ShopList",
				component: () => import("../views/Goods/Goods.vue"),
				meta: ['商品管理', '商品列表'],
			},
			{
				path: '/params',
				name: "params",
				component: () => import("../views/Goods/Params.vue"),
				meta: ['商品管理', '分类列表'],
			},
			{
				path: '/categories',
				name: "categories",
				component: () => import("../views/Goods/Categories.vue"),
				meta: ['商品管理', '商品分类'],
			},
			{
				path: "/shopadd",
				name: "/Shopadd",
				component: () => import("../views/Goods/Addshop.vue"),
				meta: ["商品管理", "添加商品"]
			},
			{
				path: '/orders',
				name: "Orders",
				component: () => import("../views/Order/Orders.vue"),
				meta: ['订单管理', '订单列表'],
			},
			// 数据统计
			{
				path: '/reports',
				name: "Reports",
				component: () => import("../views/Rept/Reports.vue"),
				meta: ['数据统计', '数据报表'],
			},

		]
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/common/Login.vue")
	}
]

const router = new VueRouter({
	mode: "hash",
	base: process.env.BASE_URL,
	routes
})

export default router
