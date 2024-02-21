const vm = require('vm');

const x = 1;

const context = { x: 2 };
vm.createContext(context); // 上下文隔离化对象。

const code = 'x += 40; var y = 17;';
// x 和 y 是上下文中的全局变量。
// 最初，x 的值为 2，因为这是 context.x 的值。
vm.runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17

console.log(x); // 1
// console.log(y); // ReferenceError: y is not defined
