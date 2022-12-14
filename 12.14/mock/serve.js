let exporess = require("express")
let Mock = require("mockjs")
const loginData = require("./common/longin.json")
const home = require("./common/home.json")
const users = require("./common/users.json") // 用户列表
const rolesData = require('./common/roles.json') // 角色列表
const rightsData = require('./common/rights.json') // 权限列表
const shoplistData = require('./common/shoplist.json') // 商品列表
const categoriesData = require('./common/categories.json') // 商品分类
const reportsData = require('./common/reports.json') // 数据统计
const paramsData = require("./common/params.json") // 
const rolesTree = require("./common/tree.json"); // 分配权限
const kuaidiData = require("./common/kuaidi.json"); //引入物流数据
const ordersData = require("./common/orders.json") //引入订单数据

let app = exporess()
// 登录
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
// 侧边栏数据
app.use("/left", function (req, res) {
  res.json(
    Mock.mock({
      ...home
    })
  )
})
// 用户列表
app.use("/users", function (req, res) {
  res.json(
    Mock.mock({
      ...users
    })
  )
})
// 角色列表
app.use("/roles", function (req, res) {
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
// 权限列表
app.use("/rights", function (req, res) {
	res.json(
		Mock.mock({
			...rightsData
		})
	)
})
// 商品列表
app.use("/goods", function (req, res) {
	res.json(
		Mock.mock({
			...shoplistData
		})
	)
})
//商品分类
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...categoriesData
		})
	)
})
/*数据统计*/
app.use("/reports/type/1", function (req, res) {
	res.json(
		Mock.mock({
			...reportsData
		})
	)
})

/**分类参数-商品分类 */
app.use("/params", function (req, res) {
  res.json(
    Mock.mock({
      ...paramsData
    })
  )
})
/**分配权限 */
app.use("/tree", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesTree
    })
  )
})
// 订单列表数据接口
app.use("/orders", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...ordersData
    })
  );
});

// 物流数据接口
app.use("/kuaidi/:id", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...kuaidiData
    })
  );
});

app.listen("8090", () => {
  console.log("监听端口  8090")
})
