// 生产环境配置
// process.env.NODE_ENV='development';//设置node为开发环境
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//单独提取css的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');//压缩css文件
module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/built.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,//代替style-loader不使用标签插入
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",//代替style-loader不使用标签插入
          MiniCssExtractPlugin.loader,
          //css兼容性处理：postcss-loader postcss-preset-env
          "css-loader",
          // 'postcss-loader',//不能使用默认配置,帮postcss找到package.json中的browserslist（自己配置）
          {
            loader:'postcss-loader',
            options:{
              ident:'postcss',
              plugins:()=>[
                require("postcss-preset-env")()
              ]
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename:'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: "development",
  devServer: {
    open: true,
    compress: true,
    port: 3001,
    contentBase: path.resolve(__dirname, "build"),
  },
};
