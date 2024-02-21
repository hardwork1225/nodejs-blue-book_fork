// 闭包的作用
var myCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = myCounter();
var Counter2 = myCounter();
console.log(Counter1.value()); /* 计数器1现在为 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* 计数器1现在为 2 */
Counter1.decrement();
console.log(Counter1.value()); /* 计数器1现在为 1 */

console.log(Counter2.value()); /* 计数器2现在为 0 */
Counter2.increment();
console.log(Counter2.value()); /* 计数器2现在为 1 */
