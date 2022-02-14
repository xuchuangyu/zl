import '../css/c.less';
import '../css/a.css';
import '../css/b.css';
import '../css/iconfont.css';
import '../css/index.css';
import addx from './add';

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
console.log(addx(1, 2, 3, 4, 5));
