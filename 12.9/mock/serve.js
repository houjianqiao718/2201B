let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock
const loginData = require("./common/login.json"); //引入login数据
const menusData = require("./common/menus.json"); //引入侧边栏数据
const usersData = require("./common/users.json"); //引入用户数据
const addUsersData = require("./common/addUsers.json"); //引入添加json
const delData = require("./common/delete.json"); //引入删除json
const rightsDaa = require("./common/rights.json"); //引入权限json
const goodsData = require("./common/goods.json"); // 引入商品列表json
const rolesData = require("./common/roles.json"); //引入角色数据
const rolesTreeData = require("./common/rolesTree"); //引入角色权限
const delRolesData = require("./common/delRoles.json"); //引入取消角色json
const reportData = require("./common/reports.json"); //引入报表数据
const ordersData = require("./common/orders.json"); //引入订单数据
const kuaidiData = require("./common/kuaidi.json"); //引入物流数据
const cateData = require("./common/categories.json"); //引入商品分类
const paramsData = require("./common/params.json"); //引入分类参数数据
const attrEditData = require("./common/attriEdit.json"); //引入分类删除
let app = express(); //实例化express

/**登录接口 */
app.use("/login", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...loginData
    })
  );
});

// 侧边栏接口
app.use("/menus", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...menusData
    })
  );
});

// 用户数据
app.use("/users", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...usersData
    })
  );
});

// 添加接口
app.use("/add", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...addUsersData
    })
  );
});

// 删除接口
app.use("/delete", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...delData
    })
  );
});

// 权限列表接口
app.use("/rights", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...rightsDaa
    })
  );
});

// 商品列表接口
app.use("/goods", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...goodsData
    })
  );
});

// 角色列表接口
app.use("/roles", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...rolesData
    })
  );
});

// 角色列表权限接口
app.use("/roles/:roleId/rights", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...rolesTreeData
    })
  );
});

// 删除对应角色接口
app.use("/roles", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...delRolesData
    })
  );
});

// 报表数据接口
app.use("/reports/type/1", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...reportData
    })
  );
});

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

// 商品分类数据接口
app.use("/categories", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...cateData
    })
  );
});

// 分类参数数据接口
app.use("/categories/:id/attributes", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...paramsData
    })
  );
});

// 分类修改数据接口
app.use("/categories/:id/attributes/:attrid", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...attrEditData
    })
  );
});

app.listen("8090", () => {
  console.log("监听端口 8090");
});
