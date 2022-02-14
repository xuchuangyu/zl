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
            },{
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,//图片小于8kb,用base64处理，减少请求
                    esModule:false,//把url-loader的es6模块化解析取消，不加的话与html-loader冲突，src会变成object module
                    name:'[hash:10].[ext]',//取图片hash的前十位与扩展名来命名
                }
            },{
                test:/\.html$/,
                loader:'html-loader',//用来解析html
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