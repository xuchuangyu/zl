const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板

module.exports = {
  mode: "production", //生产模式
  entry: "./src/js/index.js",
  output: {
    filename: "built.[contenthash:10].js",
    path: path.resolve(__dirname, "build"),
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //引用html模板
    }),
  ],
  externals:{
    //不打包jQuery进来
    jquery:'jQuery',
  }
};
