const {resolve}=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
    mode:'production',
    entry:'./src/js/index.js',
    output:{
        filename:'js/[name].[contentHash:10].js',//指定目录加名称
        path:resolve(__dirname,'build'),//将来所有资源输出的公共目录
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,//test使用正则匹配
                //use使用多个loader
                use:['style-loader','css-loader']
            },
        ]
    },
    optimization:{
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
        },
        runtimeChunk:{
            //将模块记录其他模块的hash单独打包为一个文件 runtime
            //解决修改其他文件导致入口文件中保存的hash值变化引起的入口文件缓存失效
            name:entrypoint=>`runtime-${entrypoint.name}`
        },
        minimizer:[
            //配置生产环境的压缩方案：js和css
            //4.26以上版本的webpack默认使用terser方案
            new TerserWebpackPlugin({
                //优化terser方案
                cache:true,//开启缓存
                parallel:true,//开启多进程打包
                sourceMap:true,//启动source-map
            })
        ]
    }
};
