var ws = new WebSocket('ws://localhost:9998');
ws.onopen = function () {
  // Web Socket 已连接上，使用 send() 方法发送数据
  let send_msg = '你好，服务端！';
  ws.send(send_msg);
  alert(`发送数据: ${send_msg}`);
};
ws.onmessage = function (evt) {
  var received_msg = evt.data;
  console.log(`接收到数据: ${received_msg}`);
};
ws.onclose = function () {
  // 关闭 websocket
  console.log('连接已关闭...');
};
