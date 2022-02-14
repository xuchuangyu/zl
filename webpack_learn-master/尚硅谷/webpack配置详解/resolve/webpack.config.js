const {resolve}=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/js/index.js',
    output:{
        filename:'js/[name].js',//指定目录加名称
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
    resolve:{
        //解析模块的规则
        alias:{
            //配置路径别名,简写路径，但是就没有提示了
            $css:resolve(__dirname,'src/css')
        },
        //配置省略的后缀名,默认为.js
        extensions:['.js','.json','.css','.jsx'],
        //告诉webpack解析模块的目录，默认为当前目录的'node_modules'
        modules:[resolve(__dirname,'../../node_modules'),'node_modules']
    }
};
