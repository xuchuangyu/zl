import '../css/c.less';
import '../css/a.css';
import '../css/b.css';
import '../css/iconfont.css';
import '../css/index.css';
import { mul } from './test';

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

console.log(mul(3, 3));

// 注册serverceWorker
//eslint不认识浏览器的配置，要去package修改eslintConfig的env
if ('serviceWorker' in navigator) {
  // 兼容判断
  window.addEventListener('load', () => {
    //由webpack生成
    navigator.serviceWorker.register('/service-worker.js')
      .then((res) => {
        console.log('注册service-worker成功', res);
      })
      .catch((e) => {
        console.log(e);
      });
  });
}
