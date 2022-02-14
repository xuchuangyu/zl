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
    devServer:{
        contentBase:resolve(__dirname,'build'),//运行代码的目录
        watchContentBase:true,//监视contentBase目录的所有文件，如果变化就reload
        watchOptions:{
            ignored:/node_modules/,//忽略文件
        },
        compress:true,//启动gzip压缩
        port:3002,//设定端口号
        host:'localhost',//设置域名
        open:true,//自动打开浏览器
        hot:true,//开启HRM
        clintLogLevel:'none',//不打印启动服务器日志信息
        quiet:true,//除了基本的启动信息意外，其他内容都不打印
        overlay:false,//如果出错，不要全屏提示
        proxy:{
            //服务器代理，解决开发环境下的跨域问题
            'api':{
                //一旦devServer服务器3002接收到/api/xxx的请求，就会通过proxy转发到本地的服务器8080
                target:'http://localhost:8080',
                pathRewrite:{
                    '^/api':'',//发送请求时，请求路径重写，/api/xxx->/xxx
                }
            },
            //下面跨域新增代理
        }
    }
};
