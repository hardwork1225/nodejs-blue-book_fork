const test = require('./test');

exports.main = function () {
  setInterval(function () {
    console.log('main 读取到的 test 模块内容', test);
    // console.log('==========', require.cache);
  }, 5000);
};
