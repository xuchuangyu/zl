const {resolve}=require('path')
//最精简的基本仅能打包js代码的webpack4
module.exports={
    mode:'production',
    entry:'./src/index.js',
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dist'),
    },
}