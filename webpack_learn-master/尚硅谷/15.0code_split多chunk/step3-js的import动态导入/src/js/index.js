// import { mul } from './test';
const add = (x, y) => x + y;
new Promise((resolve) => {
  console.log('promise');
  setTimeout(() => {
    console.log('timeout');
    resolve();
  }, 0);
}).then(() => {
  console.log('p_end');
});
console.log(add(2, 3));
import(/* webpackChunkName:'test' */'./test')//返回promisr对象
  .then((res)=>{
    console.log('test加载成功',res)
    console.log(res.mul(3, 3));
  })
  .catch((e)=>{
    console.log(e)
  })
