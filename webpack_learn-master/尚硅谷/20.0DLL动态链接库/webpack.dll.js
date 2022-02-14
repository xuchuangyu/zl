//使用dll技术对第三方库进行单独打包jquery\react\vue等
//需要运行webpack.dll.js
// webpack --config webpack.dll.js
const {resolve} =require('path')
const webpack =require('webpack')
module.exports={
    entry:{
        jquery:['jquery']
        //也可以写其他的，数组中也可以加
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'dll'),
        library:'[name]_[hash]',//打包的库向外暴露的内容叫什么名字
    },
    plugins:[
        //打包生成manifest.json-》提供和jquery的映射
        new webpack.DllPlugin({
            name:'[name]_[hash]',//映射库的暴露的内容名称
            path:resolve(__dirname,'dll/manifest.json')//输出的配置文件
        })
    ]
}