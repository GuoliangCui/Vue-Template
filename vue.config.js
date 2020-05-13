//Vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: `dist/${process.env.OUTPUT_PATH}`,
  assetsDir: "static",
  indexPath: "index.html",
  lintOnSave: true, //是否在保存的时候使用 `eslint-loader` 进行检查。 有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
  productionSourceMap: process.env.NODE_ENV != "production", //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。

  devServer: {
    host: "localhost",
    port: 8080,
    open: true //自动打开浏览器
    // https:false,
    // hotOnly:false,
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:5000',
    //         // changeOrigin:true,
    //         secure: false,
    //         pathRewrite: {
    //             '^/api': '',
    //         }
    //     }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      // .set("@",resolve('src'))//默认有配置
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"));
  }
};
