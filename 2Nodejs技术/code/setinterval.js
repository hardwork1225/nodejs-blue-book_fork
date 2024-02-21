let id1 = setTimeout(function () {
  console.log('setTimeout');
}, 1000);
let id2 = setInterval(function () {
  console.log('setInterval');
}, 1000);

setTimeout(() => {
  clearTimeout(id1);
  clearInterval(id2);
}, 5000);
