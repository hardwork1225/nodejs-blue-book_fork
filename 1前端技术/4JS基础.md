<h1 class="article-title no-number">JS基础</h1>

JavaScript 是 Web 的编程语言。

所有现代的 HTML 页面都使用 JavaScript。

JavaScript 非常容易学。

# 数据类型

| 基本类型                                                                                                      | 引用类型                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ● 字符串 String<br />● 数字 Number<br />● 布尔 Boolean<br />● 对空 Null<br />● 未定义 Undefined<br />● Symbol | ● 对象 Object<br />● 数组 Array<br />● 函数 Function<br />● 日期 Date<br />● 正则 RegExp |

> [!note]
>
> Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

## typeof

JavaScript 是一门弱语言，它在声明变量时无需确定变量的类型，JavaScript 在运行时会自动判断。

那么如何判断一个变量的类型呢？JavaScript 提供了`typeof`运算符，用来检测一个变量的类型。

- 使用方法

```js
typeof 表达式;
// 或
typeof 变量;
```

- 返回值

| 示例                                            | 返回值      | 说明                           |
| ----------------------------------------------- | ----------- | ------------------------------ |
| `typeof undefined`                              | "undefined" | 未定义的变量或值               |
| `typeof true`                                   | "boolean"   | 布尔类型                       |
| `typeof "123"`                                  | "string"    | 字符串                         |
| `typeof 123`                                    | "number"    | 数值                           |
| `typeof []`<br />`typeof {}`                    | "object"    | null 值<br />数组<br />JS 对象 |
| `typeof console.log`<br />`typeof function(){}` | "function"  | 函数                           |

## 动态类型

JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型：

```js
var x; // x 为 undefined
var x = 5; // 现在 x 为数字
var x = 'John'; // 现在 x 为字符串
```

## Undefined 和 Null

- Undefined：表示变量“**缺少值**”，即这地方应该有值，但是目前还没有定义值。

- Null：表示变量有值，值为“**空**”。可以通过将变量的值设置为 null 来清空变量。

```js
undefined == null; // true
undefined === null; // false

typeof undefined; // "undefined"
typeof null; // "object"

Number(undefined); // NaN
Number(null); // 0
```

# 变量提升

JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。

JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。

以下两个实例将获得相同的结果：

```js
// 实例1
x = 5; // 变量 x 设置为 5
elem = document.getElementById('demo'); // 查找元素
elem.innerHTML = x; // 在元素中显示 x
var x; // 声明 x
```

```js
// 实例2
var x; // 声明 x
x = 5; // 变量 x 设置为 5
elem = document.getElementById('demo'); // 查找元素
elem.innerHTML = x; // 在元素中显示 x
```

**JavaScript 只有声明的变量会提升，初始化的不会。**

以下两个实例结果结果不相同：

```js
// 实例1
var x = 5; // 初始化 x
var y = 7; // 初始化 y
elem = document.getElementById('demo'); // 查找元素
elem.innerHTML = x + ' ' + y; // 显示 x 和 y
```

```js
// 实例2
var x = 5; // 初始化 x
elem = document.getElementById('demo'); // 查找元素
elem.innerHTML = x + ' ' + y; // 显示 x 和 y，y 为 undefined
var y = 7; // 初始化 y
```

# 变量定义

## var 的 bug

1. **JS 没有块级作用域**。

   请看这样一条规则：**在 JS 函数中的 var 声明，其作用域是函数体的全部**。

   ```js
   // 明明已经跳出 for 循环了，却还可以访问到 for 循环内定义的变量 a ，甚至连 i 都可以被放访问到，尴尬~
   for (var i = 0; i < 10; i++) {
     var a = 'a';
   }
   console.log(a);
   ```

2. **循环内变量过度共享**。

   在浏览器里运行一下，看看和你预想的结果是否相同？

   没错，控制台输出了 3 个 3，而不是预想的 0、1、2。

   事实上，这个问题的答案是，循环本身及三次 timeout 回调均**共享唯一的变量 i** 。

   当循环结束执行时，**i** 的值为 3。所以当第一个 timeout 执行时，调用的**i** 当让也为 3 了。

   ```js
   for (var i = 0; i < 3; i++) {
     setTimeout(function () {
       console.log(i);
     }, 1000);
   }
   ```

   话说到这儿，想必客官已经猜到 **let** 是干嘛用的。

   你没猜错，就是解决这两个 bug 的。

   你尽可以把上述的两个例子中的 var 替代成 let 再运行一次。

   > [!note]
   >
   > 必须声明 'use strict' 后才能使用 let 声明变量，否则浏览并不能显示结果。

## let 定义变量

**let 声明的变量拥有块级作用域。**

**let 声明的全局变量不是全局对象的属性。**

**形如 for (let x...)的循环在每次迭代时都为 x 创建新的绑定。**

**用 let 重定义变量会抛出一个语法错误（SyntaxError）。**

```js
let a = 'a';
let a = 'b';
// Uncaught SyntaxError: Identifier 'a' has already been declared
```

## const 定义常量

ES6 引入的第三个声明类关键词：const。const 就是用来定义常量的。

```js
// 下面程序会报错
// a是一个常量，不能被赋值。
const a = 1;
a = 2;
// Uncaught TypeError: Assignment to constant variable.
```

```js
// 下面程序却不会报错
// a虽然是常量，但是一个对象，存的是地址不是值
const a = {};
a['key'] = 'value';
```

# 对象

JavaScript 对象是拥有属性和方法的数据。

生活中，一辆汽车是一个对象。

对象有它的属性，如重量和颜色等，方法有启动停止等。

> [!note]
>
> 在 JavaScript 中，对象是非常重要的，当你理解了对象，就可以了解 JavaScript 。
>
> **JavaScript 对象是变量的容器。**

```js
var person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
person.fullName(); // 返回 John Doe
```

## String 字符串对象

JavaScript 字符串是原始值，可以使用字符创建： **var firstName = "John"**

但我们也可以使用 new 关键字将字符串定义为一个对象： **var firstName = new String("John")**

```js
var x = 'John';
var y = new String('John');
typeof x; // "string"
typeof y; // "object"
```

> [!danger]
>
> 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用。

## Number 数字对象

```js
var x = 1;
var y = new String(1);
typeof x; // "number"
typeof y; // "object"
```

## Date 日期对象

```js
const now = new Date(); // Sun Mar 28 2021 16:15:47 GMT+0800 (中国标准时间)
now.getFullYear(); // 年 2021
now.getMonth(); // 月 2 从0开始index，2index表示3月
now.getDate(); // 日 28
now.getDay(); // 星期 0 从0开始，星期天是0
now.getHours(); // 时 16
now.getMinutes(); // 分 15
now.getSeconds(); // 秒 47
now.getMilliseconds(); //毫秒 498
```

## Array 数组对象

常用对象方法。

| 方法                    | 描述                                                                       |
| ----------------------- | -------------------------------------------------------------------------- |
| concat()                | 连接 2 个及以上的数组，返回新的数组                                        |
| copyWithin(2, 0)        | index2 赋值为 index0<br />index3 赋值为 index1                             |
| every()                 | 检测数组所有元素是否都符合指定条件（通过函数提供）。<br />返回 true、false |
| fill(value, start, end) | 用一个固定值，从 start 开始到 end 截止填充                                 |
| findIndex()             | 返回符合条件的第一个元素的 index                                           |
| lastIndexOf()           | 返回符合条件的最后一个元素的 index                                         |
| find()                  | 返回符合条件的第一个元素                                                   |
| filter()                | 返回符合条件的所有元素                                                     |
| indexOf()               | 某值在数组中的 index<br />不存在为-1                                       |
| join(_separator_)       | 数组合并为字符串，用*separator*分隔符连接                                  |
| shift()                 | 删除数组的第一个元素并返回删除的元素                                       |
| pop()                   | 删除数组的最后一个元素并返回删除的元素                                     |
| push()                  | 向数组的末尾添加一个或更多元素，并返回新的长度                             |
| reverse()               | 数组反转                                                                   |
| slice()                 | 截取一部分，返回新数组                                                     |

## Boolean 布尔对象

Boolean（布尔）对象用于将非布尔值转换为布尔值（true 或者 false）。

```js
// false 相等的几种情况
0 == false; // true
-0 == false; // true
'' == false; // true

// false 不等的几种情况
undefined == false; // false
NaN == false; // false
null == false; // false
```

## Math 算术对象

| 属性    | 描述                                             |
| ------- | ------------------------------------------------ |
| Math.PI | 返回圆周率（约等于 3.14159）                     |
| Math.E  | 返回算术常量 e，即自然对数的底数（约等于 2.718） |
| LN10    | 返回 10 的自然对数（约等于 2.302）               |
| LN2     | 返回 2 的自然对数（约等于 0.693）                |

| 对象                    | 描述         |
| ----------------------- | ------------ |
| Math.abs(x)             | x 的绝对值   |
| Math.random()           | 0~1 之间的数 |
| Math.ceil(x)            | 向上取整     |
| Math.floor(x)           | 向下取整     |
| Math.round(x)           | 四舍五入     |
| Math.sqrt(x)            | 计算平方根   |
| Math.max(x1, x2,...,xn) | 最大值       |
| Math.min(x1, x2,...,xn) | 最小值       |
| Math.pow(x,y)           | x 的 y 次方  |

## RegExp 正则对象

```js
// 下面两个是等价的
var re1 = new RegExp('\\w+');
var re2 = /\w+/;
```

## Error 错误对象

Error 对象在错误发生时提供了错误的提示信息。

运行时错误实例会由执行引擎自动创建和抛出，我们也可以通过构造函数自定义`Error`实例，与其它类一样我们也可以通过`Error.prototype`向实例中添加属性和方法。

**`Error`实例包含以下属性或方法**：

- `Error.prototype.constructor` － 指定对象的构造函数
- `Error.prototype.message` － 错误信息
- `Error.prototype.name` － 错误名
- `Error.prototype.stack` － 错误堆栈信息。该属性是一个非标准属性，但被大多数执行引擎所支持。
- `Error.prototype.toString()` － 表示错误对象的描述信息。继承并重写`Object.prototype.toString()`

**错误类型**：

- `EvalError` ：Eval 错误，对象表示全局函数`eval()`中发生的错误。
- `ReferenceError`：引用错误，错误对象会在引用未定义的变量时触发。
- `RangeError`：范围错误，错误对象会在值超过有效范围时触发。
- `SyntaxError`：语法错误，错误对象会使用不合法的语法结构时触发。
- `TypeError`：类型错误，错误会在对象用来表示值的类型非预期类型时触发。
- `URIError`：URI 错误，错误会错误使用全局 URI 函数如`encodeURI()`、`decodeURI()`等时触发

# this 关键字

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的(undefined)。
- 在事件中，this 表示接收事件的元素。
- 类似 call() 和 apply() 方法可以将 this 引用到任何对象。
