import data from './data.json'
import './index.css'
import png from './webpack.png'
console.log(png)
function fn1(){
    console.log('fn1')
}
fn1()
const fn2=()=>{
    console.log(`fn2`)
}
fn2()
console.log(data)
