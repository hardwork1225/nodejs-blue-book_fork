const p1 = new Promise((resolve, rejcet) => {
  setTimeout(() => {
    console.log('1秒'); // 1秒后输出
    resolve(1);
  }, 1000);
});
const p2 = new Promise((resolve, rejcet) => {
  setTimeout(() => {
    console.log('2秒'); // 2秒后输出
    resolve(2);
  }, 2000);
});
const p3 = new Promise((resolve, rejcet) => {
  setTimeout(() => {
    console.log('3秒'); // 3秒后输出
    resolve(3);
  }, 3000);
});

Promise.race([p1, p2, p3]).then((values) => {
  console.log(values); // p1执行结束后就输出 1
});
