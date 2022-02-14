const {resolve}=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'js/[name].js',//指定目录加名称
        path:resolve(__dirname,'build'),//将来所有资源输出的公共目录
        publicPath:'/',//所有引入资源公共路径前缀 ，'imgs/a.jpg'->'/imgs/a.jpg'
        chunkFilename:'js/[name]_chunk.js',//非入口chunk的名称：import动态引入或者optimazition使用splitchunk都可以
        //library一般用于dll，源代码构建不用
        library:'[name]',//把构建后的js暴露出去
        library:'window',//变量名添加到browser上，也可以使用global改用到node，或者commonjs、amd等

    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
};