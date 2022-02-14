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
                //语法检查：对js进行规范，检查语法错误，eslint-loader eslint
                //只检查源代码，不检查第三方
                //设置检查规则 package.json中的eslintConfig中设置（airbnb）
                // "eslintConfig":{
                //     "extends":"airbnb-base"
                //   }
                //eslint-config-airbnb-base->eslint eslint-plugin-import
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'eslint-loader',
                options:{
                    fix:true,//自动修复
                },
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}