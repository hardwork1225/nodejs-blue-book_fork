const fs = require('fs'); //文件系统模块
const testModule = require('./test.js');

function cleanCache(modulePath) {
  const module = require.cache[modulePath];
  if (!module) {
    return;
  }
  // 该模块是否有主模块
  // module.parent 在 Node.js v14 版本后被弃用
  if (module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(module), 1);
  }
  require.cache[modulePath] = null;
}

const watchFile = function (filepath) {
  // require.resolve() 返回该模块完整的文件名
  const fullpath = require.resolve(filepath);
  // fs.watch() 监听文件事件
  fs.watch(fullpath, function (event, filename) {
    if (event === 'change') {
      try {
        cleanCache(fullpath);
      } catch (ex) {
        console.error('模块加载失败');
      }
    }
  });
};

function startHotPatch() {
  const watchFiles = ['./test.js'];
  for (let i = 0; i < watchFiles.length; i++) {
    watchFile(watchFiles[i]);
  }
}

setInterval(function () {
  startHotPatch();
  var test = require('./test.js');
  console.log('test', test);
}, 3000);
