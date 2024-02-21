function deepCopy(obj) {
  // 简单类型 或 null 直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const newObj = obj.constructor === Array ? [] : {};
  // 循环 obj 的属性/元素
  for (const key in obj) {
    const val = obj[key];
    if (typeof val !== "object" || val === null) {
      newObj[key] = val;
    } else {
      newObj[key] = deepCopy(val);
    }
  }
  return newObj;
}

var obj1 = {
  name: "shen",
  show: function () {
    console.log("hello world");
  },
};
var obj2 = deepCopy(obj1);
console.log("obj1:", obj1);
console.log("obj2:", obj2);
