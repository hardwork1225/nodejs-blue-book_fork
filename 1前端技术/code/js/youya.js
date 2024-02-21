async function test() {
  const data = await axios.get('https://randomuser.me/api/');
  console.log(data);
}
// 等同于
function test() {
  // axios 也是 promise 对象
  axios.get('https://randomuser.me/api/').then((res) => console.log(res));
}

// 结合try/catch
async function test() {
  try {
    const data = await axios.get('https://randomuser.me/api/');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
