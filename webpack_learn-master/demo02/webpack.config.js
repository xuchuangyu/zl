let path=require('path')
module.exports={
    entry:"./src/index.js",//入口文件
    output:{
        filename:'bundle.js',//输出文件名
        path:path.resolve(__dirname,'dist')//输出路径，用绝对路径
    },
    mode:'development',//生产模式
}