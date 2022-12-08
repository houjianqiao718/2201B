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
const delRolesData = require("./common/delRoles.json"); //引入取消角色json
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

// 取消角色权限接口
app.use("/delete", function (req, res) {
  console.log(req, res);
  res.json(
    Mock.mock({
      ...delRolesData
    })
  );
});

app.listen("8090", () => {
  console.log("监听端口 8090");
});
