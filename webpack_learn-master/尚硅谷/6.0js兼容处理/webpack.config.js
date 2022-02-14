const path =require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                //下载babel-loader和@babel/preset-env @babel/core
                //暂时只能转换一部分简单语法
                //使用@babel/polyfill，但是特别大(已废弃)
                //最终选择按需加载的方式 core-js，但是需要自己改配置
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/,
                options:{
                    //预设：指示babel做什么样的兼容性处理
                    //presets:['@babel/preset-env']
                    presets:[
                        [
                            '@babel/preset-env',{
                                useBuiltIns:'usage',//按需加载
                                corejs:{
                                    version:3,//制定core-js版本
                                },
                                targets:{
                                    chrome:"60",
                                    firefox:'60',
                                    ie:'9',
                                    safari:'10',
                                    edge:'17',
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}