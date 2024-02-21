async function timeout() {
  return 'hello world';
}
timeout().then((result) => {
  console.log(result);
});
console.log('我在异步函数后面，会先执行谁呢？');

/** output
    我在异步函数后面，会先执行谁呢？
    hello world
 */
