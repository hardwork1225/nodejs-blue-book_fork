const WebSocket = require('ws');
//创建一个WebSocketServer的实例
const host = 'localhost';
const port = 9998;
const wss = new WebSocket.Server(
  {
    host,
    port,
  },
  () => {
    console.log(`* 🚀 ws://${host}:${port} 服务启动成功!`);
  }
);

wss.on('connection', (clientSock) => {
  // 监听心跳
  clientSock.on('pong', () => {
    clientSock.isAlive = true;
  });
  // 接收到数据
  clientSock.on('message', (message) => {
    console.log(`接收到数据: ${message}`);
    clientSock.send('你好，客户端！');
  });
  // 通信发生错误
  clientSock.on('error', (err) => {
    console.log(`连接失败, ${err.message}`);
  });
  // 客户端连接关闭时触发
  clientSock.on('close', () => {
    console.log(`Bye.`);
  });
});
