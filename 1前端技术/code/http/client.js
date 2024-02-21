const xhr = new XMLHttpRequest();
// 设置请求方式和请求地址
xhr.open('POST', 'http://127.0.0.1:3008');
// readystate是xhr对象中的属性，用来获取ajax状态码 0 1 2 3 4
xhr.onreadystatechange = function () {
  // 判断ajax状态码
  // status获取http状态码。200表示ok
  if (xhr.readyState === 4 && xhr.status === 200) {
    // xhr.responseText表示请求返回的数据内容
    console.log(xhr.responseText);
  }
};
// 发送
xhr.send('Hello Server!');
