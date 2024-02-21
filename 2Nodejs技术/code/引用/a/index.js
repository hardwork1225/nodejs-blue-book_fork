const aname = require('./name'); // 引用的是'a/name.js'
const bModule = require('../b');
const bName = bModule.require('./name'); // 引用的是'b/name.js'

console.log(aname); // AAA
console.log(bName); // BBB
