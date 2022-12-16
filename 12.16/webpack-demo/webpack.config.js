const path = require("path")
console.log(path.join(__dirname, "/dist"))
module.exports = {
  mode: "development",
  entry: "./src/js/main.js", // 入口文件
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  }
}
