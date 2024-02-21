function f2() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}
var ff = f2(); // ff = function() { num++; return num; }
// num 本来在 f2的作用域中
console.log(ff()); // 1
console.log(ff()); // 2
console.log(ff()); // 3
