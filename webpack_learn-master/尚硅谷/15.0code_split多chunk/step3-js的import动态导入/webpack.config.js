const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板


module.exports = {
  mode: "production", //生产模式
  entry: "./src/js/index.js",//单入口
  // entry:{
  //   //多入口，每个入口一个bundle
  //   main:'./src/js/index.js',
  //   test:'./src/js/test.js'
  // },
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
      chunks:'all',
//     //下面都是默认值，可以不写
//     minSize:30*1024,//参与分割的chunk最小为30kb,
//     maxSize:0,//最大没有限制
//     minChunks:1,//要提取的chunk最少被引用1次
//     maxAsyncRequests:5,//按需加载的时候并行加载的文件最大数量为5
//     maxInitialRequests:3,//入口js文件最大并行请求数量
//     automaticNameDelimiter:'~',//名称连接符
//     name:true,//可以使用命名规则
//     cacheGroups:{
//         //分割chunk的组
//         vendors:{
//             //node_modules文件会被打包到vendors组中的chunk中-->vendors~xxx.js
//             test:/[\\/]node_modules[\\/]/,
//             priority:-10,//打包的优先级
//         },
//         default:{
//             minChunks:2,//要提取的chunk最少被引用两次
//             priority:-20,//打包的优先级
//             reuseExistingChunk:true,//启动打包复用模块，再用不重新打包
//         }
//     }
    }
  },
  devtool:'source-map',
};
