const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板
const MiNiCssExtractPlugin = require("mini-css-extract-plugin"); //提取出css
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //压缩css
process.env.NODE_ENV = "production";
//复用css的loader
let commonCssLoader = [
  {
    loader: MiNiCssExtractPlugin.loader,
    options: {
      publicPath: "../", //避免css中的路径引入错误
    },
  }, //代替style标签而是引入css的形式
  "css-loader",
  {
    //把css压缩
    loader: "postcss-loader",
    options: {
      //配置package.json的"browserslist"
      ident: "postcss",
      plugins: () => [require("postcss-preset-env")()],
    },
  },
];
module.exports = {
  mode: "production", //生产模式
  entry: "./src/js/index.js",
  output: {
    filename: "built.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //eslint检查
      {
        //package.json配置"eslintConfig"
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre", //js优先执行eslint
        loader: "eslint-loader",
        options: {
          fix: true, //规范自动修复
        },
      },
      {
        oneOf: [
          //css\less
          {
            test: /\.css$/,
            use: [...commonCssLoader],
          },
          {
            test: /\.less$/,
            use: [...commonCssLoader, "less-loader"],
          },
          //js先eslint再babel
          //js兼容处理
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage", //按需加载
                    corejs: {
                      version: 3, //制定core-js版本
                    },
                    targets: {
                      //制定兼容的目标
                      chrome: "60",
                      firefox: "60",
                      ie: "9",
                      safari: "10",
                      edge: "17",
                    },
                  },
                ],
              ],
            },
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[hash:10].[ext]",
              outputPath: "imgs",
              esMoudle: false,
            },
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          {
            exclude: /\.(js|html|css|less|json|jpg|png|gif)$/,
            loader: "file-loader",
            options: {
              outputPath: "media",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //引用html模板
      minify: {
        //压缩html
        collapseInlineTagWhitespace: true,
        removeComments: true,
      },
    }),
    new MiNiCssExtractPlugin({
      filename: "css/built.css", //设置css的输出
    }),
    new OptimizeCssAssetsWebpackPlugin(), //压缩css的插件
  ],
};
