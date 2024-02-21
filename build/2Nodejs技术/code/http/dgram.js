const dgram = require('dgram');
const port = 33333;

// 创建服务端
const server = dgram.createSocket('udp4');
server.on('message', function (message, rinfo) {
  console.log(
    'server got message: ' +
      message +
      ', from: ' +
      rinfo.address +
      ':' +
      rinfo.port
  );
});
server.bind(port);

// 创建客户端
const client = dgram.createSocket('udp4');
const msg = Buffer.from('hello world');
const host = '255.255.255.255';
client.bind(function () {
  client.setBroadcast(true);
  client.send(msg, port, host, function (err) {
    if (err) throw err;
    console.log('msg has been sent');
    client.close();
  });
});
