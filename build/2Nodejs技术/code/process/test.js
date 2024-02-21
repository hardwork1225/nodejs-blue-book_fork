const { spawn } = require('child_process');
const ls = spawn('ls', ['-al']);

console.log('当前进程的PID：', process.pid);
console.log('子进程PID：', ls.pid);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('exit', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
// 打印输出：
// 当前进程的PID 8623
// 子进程PID 8624
