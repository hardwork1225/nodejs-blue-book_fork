function* gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}
var g = gen(1);
console.log(g.next());
console.log(g.throw('Generator Error.'));

/** output
    { value: 3, done: false }
    Generator Error.
    { value: undefined, done: true }
 */
