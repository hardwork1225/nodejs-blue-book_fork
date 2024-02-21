// a.js
console.log('a模块start');
exports.test = 1;
undeclaredVariable = 'a模块未声明变量';
const b = module.require('./b');
console.log('a模块加载完毕: b.test值：', b);
