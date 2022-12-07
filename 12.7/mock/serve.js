let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock
const loginData = require("./common/login.json"); //引入login数据
const menusData = require("./common/menus.json"); //引入侧边栏数据
const usersData = require("./common/users.json"); //引入用户数据
const addUsersData = require("./common/addUsers.json"); //引入添加json
const delData = require("./common/delete.json"); //引入删除json
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

app.listen("8090", () => {
  console.log("监听端口 8090");
});
