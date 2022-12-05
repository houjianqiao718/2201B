const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  /**根目录*/
  publicPath: "./",
  /**默认关闭生产环境的资源 */
  productionSourceMap: false,
  /**打包时候的文件夹名称 */
  outputDir: "dist",
  /**放置打包时静态资源文件生成的存放位置js css img */
  assetsDir: "assets",
  /**本地的环境代理配置 */
  devServer: {
    /**端口号 */
    port: "9999",
    // 开发运行时域名
    host: "localhost",
    open: true,
    /**是都启用https */
    https: false
    /**默认开启代理模式 */
    // proxy: {
    //   "/api":{
    //     changeOrigin: true,
    //     /** 如果是http接口，需要配置该参数*/
    //     secure: false,
    //     /** 代理的地址*/
    //     target: "url",
    //     /**路径的重命名 */
    //     pathRewrite: {

    //     }
    //   }
    // }
  }
  // transpileDependencies: true,
  // lintOnSave: false
})
