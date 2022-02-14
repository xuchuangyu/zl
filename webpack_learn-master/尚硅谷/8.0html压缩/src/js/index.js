// import '@babel/polyfill'

const add=(x, y)=>{
  return x + y;
}
new Promise((resolve)=>{
  console.log('promise')
  setTimeout(()=>{console.log('timeout');resolve()},0)
}).then(res=>{
  console.log('p_end')
})
console.log(add(2, 3));
