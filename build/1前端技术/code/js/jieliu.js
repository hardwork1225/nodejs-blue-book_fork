//节流throttle代码：
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    // 在函数开头判断标记是否为true
    // true，表示现在没有延时任务，继续执行
    // false，表示现在还有延时任务，直接return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      canRun = true;
    }, 500);
  };
}

function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
