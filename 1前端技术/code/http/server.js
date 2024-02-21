const http = require('http');

// http server 例子
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('Hello Client!');
});

// 监听端口
server.listen(3008, () => {
  console.log(`* 🚀 http://127.0.0.1:3008/ 服务启动成功!`);
});
