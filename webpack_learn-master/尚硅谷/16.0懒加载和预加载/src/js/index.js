
console.log('index.js被加载了')
document.getElementById('btn').onclick=async function(){
  let {mul}=await import(/*webpackChunkName:'test',webpackPrefetch:true*/'./test')
  console.log(mul(4,5))
}