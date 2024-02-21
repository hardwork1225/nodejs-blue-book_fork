//master.js
const { fork } = require('child_process');
const cpus = require('os').cpus(); // CPU核数
const server = require('net').createServer();
server.listen(3000);
process.title = '测试-主进程';
process.env.num = 1;
for (let i = 0; i < cpus.length; i++) {
  const worker = fork('worker.js');
  process.env.num++;
  worker.send('server', server);
  console.log(`子进程已创建, pid:${worker.pid}, ppid:${process.pid}`);
}
