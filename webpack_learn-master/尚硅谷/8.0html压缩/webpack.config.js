const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",//生产环境自动压缩js
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify:{
        //移除空格
        collapseWhitespace:true,
        //移除注释
        removeComments:true,
      }
    }),
  ],
};
