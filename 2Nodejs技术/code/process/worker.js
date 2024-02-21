const http = require('http');
http.createServer((req, res) => {
  res.end(`子进程响应, pid:${process.pid}, ppid:${process.ppid}`);
});
process.title = `测试-子进程${process.env.num}`;
process.on('message', function (m, sendHandle) {
  if (m === 'server') {
    sendHandle.on('connection', function (socket) {
      server.emit('connection', socket);
    });
  }
});
