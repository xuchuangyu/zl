import '../css/c.less';
import '../css/a.css';
import '../css/b.css';
import '../css/iconfont.css';
import '../css/index.css';
import print from './print';

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
print();
if (module.hot) {
  //可以监听print.js的代码变化启动HRM，但是对入口文件index.js不能起到作用
  module.hot.accept('./print.js', () => {
    console.log('热加载print.');
    //console.log(module.hot);
    print();
  });
}
