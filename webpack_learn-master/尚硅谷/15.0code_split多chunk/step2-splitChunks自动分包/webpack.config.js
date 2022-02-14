const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板


module.exports = {
  mode: "production", //生产模式
  // entry: "./src/js/index.js",//单入口
  entry:{
    //多入口，每个入口一个bundle
    main:'./src/js/index.js',
    test:'./src/js/test.js'
  },
  output: {
    filename: "js/[name].[contenthash:10].js",
    path: path.resolve(__dirname, "build"),
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //引用html模板
      minify:{//压缩html
          collapseInlineTagWhitespace:true,
          removeComments:true,
      }
    }),
  ],
  optimization:{
    //可以将node_modules中的模块单独打包成一个chunk
    splitChunks:{
      chunks:'all'
    },
    runtimeChunk:{
      //将模块记录其他模块的hash单独打包为一个文件 runtime
      name:entrypoint=>`runtime-${entrypoint.name}`
  }
  },
  devtool:'source-map',
};
