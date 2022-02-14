let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:"./src/index.js",//入口文件
    output:{
        filename:'bundle.js',//输出文件名
        path:path.resolve(__dirname,'dist')//输出路径，用绝对路径
    },
    mode:'development',//生产模式
    module:{
        //对某种格式的文件进行转换处理
        rules:[
            {
                test:/\.css$/,//使用正则匹配
                use:[
                    //顺序从下到上
                    'style-loader',//把css-js引入到style
                    'css-loader',//把css转换成js
                ]
            }
        ]
    },
    //配置插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}