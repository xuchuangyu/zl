const {resolve}=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'build'),

    },
    module:{
        rules:[
            {
                test:/\.css$/,//test使用正则匹配
                //use使用多个loader
                use:['style-loader','css-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                include:resolve(__dirname,'src'),
                enforce:'pre',//可以用post表示延后执行
                loader:'eslint-loader',
                options:{},//对应loader的配置项
            },
            {
                //oneOf中只会生效一个
                oneOf:[

                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
};
