const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')
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
    new webpack.DllReferencePlugin({
      //让manifest告诉webpack哪些库不参与打包
      manifest:path.resolve(__dirname,'dll/manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      //将某个文件打包输出去，并在html中自动引入
      filepath:path.resolve(__dirname,'dll/jquery.js')
    })
  ],
};
